const getInstall = () => {
  const stored = localStorage.getItem("Installed");
  return stored ? JSON.parse(stored) : [];
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
