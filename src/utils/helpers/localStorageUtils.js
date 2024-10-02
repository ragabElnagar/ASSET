
export const saveToLocalStorage = (key, value) => {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  };
  
  export const getFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      return storedValue || defaultValue;
    }
  };
  
  export const clearAllLocalStorage = () => {
    localStorage.clear();
  };
  