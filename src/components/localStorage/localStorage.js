const getInstall = () => {
  try {
    if (typeof window === "undefined" || !window.localStorage) return [];
    const stored = window.localStorage.getItem("Installed");
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
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
