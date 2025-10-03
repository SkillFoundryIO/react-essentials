import useLocalStorage from "../hooks/useLocalStorage";

function Profile3() {
  const [profile, setProfile] = useLocalStorage("profile", {
    fontsize: 14,
    language: 'en'
  });

  const [theme, setTheme] = useLocalStorage("theme", "light");

  function updateFontSize(newSize) {
      setProfile({...profile, fontsize: newSize});
  }

  function updateTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      {profile ? (
        <div>
          <p>Your preferred font size is: {profile.fontsize}</p>
          <button onClick={() => updateFontSize(profile.fontsize + 2)}>
            Increase Font Size
          </button>
          <button onClick={() => updateFontSize(profile.fontsize - 2)}>
            Decrease Font Size
          </button>

          <p>Your preferred theme is: {theme}</p>
          <button onClick={updateTheme}>
            Toggle Theme
          </button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </>
  );
}

export default Profile3;