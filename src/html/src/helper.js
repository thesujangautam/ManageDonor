class State {
  constructor(state) {
    this.state = state;
  }

  setState(state) {
    this.state = { ...this.state, state };
  }

  getState() {
    return this.state;
  }
}

class Caching {
  constructor(key) {
    this.key = key;
  }

  loadData(key = this.key) {
    const savedRawData = localStorage.getItem(key);
    if (!savedRawData) return {};

    try {
      const savedParsedData = JSON.parse(savedRawData);
      if (!savedParsedData || typeof savedParsedData !== "object")
        throw new Error("Parse Error");
      return savedParsedData;
    } catch (e) {
      console.log(e);
      return {};
    }
  }

  saveData(field, value, key = this.key) {
    const currentState = this.loadData(key);
    console.log(currentState);
    currentState[field] = value;
    localStorage.setItem(key, JSON.stringify(currentState));
  }

  clearData(key = this.key) {
    localStorage.removeItem(key);
  }
}

/**
 *
 * @param {Object} cache is a cache object
 */
const loadCache = (cache) => {
  const data = cache.loadData();
  formElements.forEach(({ key }) => {
    const el = document.getElementById(key);
    el.value = data[key] || "";
  });
};

/**
 *
 * @param {Object} cache is a cache object
 */
const updateCache = (cache, state) => {
  formElements.forEach(({ key }) => {
    const el = document.getElementById(key);
    el &&
      el.addEventListener("change", (e) => {
        const value = e.target.value;
        cache.saveData(key, value);
        state.setState({ [key]: value });
      });
  });
};

const formElements = [
  {
    displayName: "First Name",
    key: "firstname",
  },
  {
    displayName: "Last Name",
    key: "lastname",
  },

  {
    displayName: "Email",
    key: "email",
  },
  {
    displayName: "Phone",
    key: "phone",
  },
  {
    displayName: "Street Address",
    key: "streetaddress",
  },

  {
    displayName: "City",
    key: "city",
  },

  {
    displayName: "State",
    key: "state",
  },

  {
    displayName: "Postal Code",
    key: "postalcode",
  },

  {
    displayName: "Frequency",
    key: "frequency",
  },

  {
    displayName: "Donation Amount",
    key: "donationAmount",
  },

  {
    displayName: "Comments",
    key: "comments",
  },

  {
    displayName: "Country",
    key: "country",
  },
  {
    displayName: "Preferred Contact",
    key: "preferredContact",
  },

  {
    displayName: "Preferred Payment",
    key: "preferredPayment",
  },
];

const KEY = "SAVED_DATA";
const getRate = ()=>{
  //  return fetch('http://api.exchangeratesapi.io/v1/latest?access_key=9ff222234afe4ecb8316eff614ae9448&format=1')
    return fetch('https://blockchain.info/ticker')
    .then(res=> res.json())
    .catch(()=> ({ success: false}))
}

