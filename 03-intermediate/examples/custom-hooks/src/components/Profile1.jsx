import { useState, useEffect } from 'react'

// this version does not use a custom hook
// the local storage would be repeated for any component that
// needs it.
function Profile1() {
  const [profile, setProfile] = useState(null);

  useEffect( () => {
    try {
      const item = localStorage.getItem("profile");
      item ? setProfile(JSON.parse(item)) : setProfile({
        fontsize: 14,
        language: 'en'
      });
    } catch (err) {
      console.error('Error reading profile: ', err);
    }
  }, []);

  return (
    <>
      {profile ? (
        <div>
          <p>Your preferred font size is: {profile.fontsize}</p>
          <p>Your preferred language is: {profile.language}</p>
        </div>
      ) : (
        <p>No profile found</p>
      )}
    </>
  );
}

export default Profile1;