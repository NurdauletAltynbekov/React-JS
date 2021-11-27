import './Profile.css';

export default function Profile() {
  return (
    <section className="container">
      <h1>
        Profile page
      </h1>
      <main className="profile-wrapper">
        <img src="https://via.placeholder.com/150?text=Pablo" alt=""/>
        <div>
          <h2>
            Pablo Jackson
          </h2>
          <p>
            29 years old...
          </p>
        </div>
      </main>
    </section>
  )
}