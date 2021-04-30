/**
 * This function takes a state and creates a summary view
 * @param {Object} state The State of the application
 * @returns div node that is a summary view
 */
const summary = (state) => {
  const div = document.createElement("div");

  formElements.forEach(({ key, displayName }) => {
    const el = document.createElement("div");
    el.textContent = `${displayName}: ${state.getState()[key]}`;
    div.appendChild(el);
  });
  return div;
};

/**
 * This function creates and returns a button node
 * @param {String} text The text to be included in the button
 * @param {Function} action The function to be executed on button click
 * @returns button node
 */
const button = (text, action) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = text;
  buttonEl.classList.add("btn");
  buttonEl.addEventListener("click", action);
  return buttonEl;
};

/**
 * This function creates a currency view
 * @param {Object} state State of the application
 * @param {Object} root THe root node in the HTML DOM.
 */
const currency = (state, root) => {
  getRate()
    .then((res) => {
      //  if(!res.USD) return;
      console.log(res);
      const bitcoin = res.USD.last;
      const euro = bitcoin / res.EUR.last;

      const { donationAmount, preferredPayment, frequency } = state.getState();

      const amount = Number.parseInt(donationAmount) || 0;

      const convertedAmount =
        preferredPayment === "Euro"
          ? euro * amount
          : preferredPayment === "Bitcoin"
          ? bitcoin * amount
          : amount;

      const totalAmount =
        frequency === "Monthly" ? 12 * convertedAmount : convertedAmount;

      const div = document.createElement("div");
      div.innerHTML = `Amount in USD for 12 months: <br><div class='txt-center bold'>$${totalAmount.toFixed(2)}</div>`;
      root.appendChild(div);
    })
    .catch((e) => alert(e));
};

window.onload = () => {
  const cache = new Caching(KEY);
  const state = new State(cache.loadData());
  const summaryView = summary(state);
  const buttonConfirm = button("Confirm", () => {
    fetch("/donate", {
      method: "POST",
      body: JSON.stringify(state.getState()),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          cache.clearData();
          alert(res.message);
          window.location.href = "/";
        } else throw new Error(res.message);
      })
      .catch((e) => alert(e));
  });
  const buttonEdit = button("Edit", () => {
    window.location.href = "/";
  });

  const buttonCancel = button("Cancel", () => {
    cache.clearData();
    window.location.href = "/";
  });
  const root = document.getElementById("root");
  const paymentEl = document.createElement('div');

  root
  .appendChild(summaryView)
  .appendChild(paymentEl);

  summaryView.appendChild(buttonConfirm);
  summaryView.appendChild(buttonEdit);
  summaryView.appendChild(buttonCancel);
  currency(state, paymentEl);
};

let ask = true;
window.onbeforeunload = function(e) {
  if (!ask) return null;
  e = e || window.event;
  //old browsers
  if (e) {
    e.returnValue = "Leave Site?";
  }
  ask = false;
  return "Leave Site?";
};
