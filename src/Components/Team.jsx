function Team() {
  return (
    <section className="dashboard-card team-card">
      <p className="eyebrow">People & purpose</p>
      <h2>Our Team</h2>
      <p>Different skills. One shared focus: A better customer experience.</p>
      <div className="team-grid">
        <article>
          <span className="team-number">01</span>
          <strong>Product &amp; Curation</strong>
          <p>Finding useful technology and making product choices easier to understand.</p>
        </article>
        <article>
          <span className="team-number">02</span>
          <strong>Operations</strong>
          <p>Keeping the details in order, from product information to everyday store operations.</p>
        </article>
        <article>
          <span className="team-number">03</span>
          <strong>Customer Support</strong>
          <p>Listening, answering questions, and helping customers take their next step.</p>
        </article>
      </div>
    </section>
  );
}

export default Team;