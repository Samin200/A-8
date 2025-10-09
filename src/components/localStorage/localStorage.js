const getInstall = () => {
  try {
    if (typeof window === "undefined" || !window.localStorage) return [];
    const stored = window.localStorage.getItem("Installed");
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    // if parsing fails or access to localStorage is blocked, return empty array
    // console.error can be useful during debugging; kept minimal for production
    console.error("getInstall error:", err);
    return [];
  }
};

const addToInstalled = (id) => {
  const stored = getInstall();
  if (stored.includes(id)) {
    alert("Already installed");
  } else {
    stored.push(id);
    localStorage.setItem("Installed", JSON.stringify(stored));
  }
};

export { getInstall, addToInstalled };
