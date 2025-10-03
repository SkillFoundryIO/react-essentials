import { useState, useEffect } from 'react'

export default function useProfile() {
  const [profile, setProfile] = useState(null);

  useEffect( () => {
    try {
      const item = localStorage.getItem("profile");
      return item ? setProfile(JSON.parse(item)) : setProfile({
        fontsize: 14,
        language: 'en'
      });
    } catch (err) {
      console.error('Error reading profile: ', err);
    }
  }, []);

  return profile;
}