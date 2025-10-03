import useProfile from "../hooks/useProfile";

function Profile2() {
  const profile = useProfile();

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

export default Profile2;