import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              src={profilepic}
              alt="Chantelle Casillas"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About the Attorney</h2>

            <p>
              Chantelle Casillas is the owner and founder of Casillas Law Group.
              She is the daughter of Mexican Immigrants born in Los Angeles,
              California. Chantelle’s mother immigrated to the United States on
              a student visa in hopes of a better life.{" "}
            </p>

            <p>
              Chantelle graduated from West Chester University of Pennsylvania
              in 2012 with a Bachelors of Science Degree, majoring in Political
              Science and Spanish. Chantelle went on to obtain her Juris
              Doctorate degree from Delaware Law School in Wilmington, Delaware.
              While in law school, Chantelle was Vice President of the Latin
              American Law Students Association as well as Vice President of the
              Alternative Dispute Resolution Society. During her time at
              Delaware Law, Chantelle externed for the Camden County
              Prosecutor’s Office, the Law Office of Meredith Brown (a boutique
              Immigration Defense Firm in Glendale, California), and the
              Department of Homeland Security, Immigration and Customs
              Enforcement – in Philadelphia, Pennsylvania. While in law school,
              Chantelle made Deans List, a special recognition given to students
              who rank in the top 20% of all students in their year and
              division.{" "}
            </p>

            <p>
              After passing the Pennsylvania Bar Exam in 2017, Chantelle clerked
              for the Honorable Morris G. Smith in the Family Division, Camden,
              New Jersey Vicinage. During her time clerking, Chantelle was
              exposed to various areas of family law, and gained insurmountable
              experience in legal writing. After her clerkship term ended,
              Chantelle went on to work for a private Immigration Defense firms
              in San Francisco, California. After working in the private bar,
              she went on to work at The Department of Homeland Security,
              Immigration and Customs Enforcement in San Francisco, California
              for a year, where she learned how the Government works.
            </p>

            <p>
              In 2017, Chantelle decided that she had enough experience to open
              her own practice. She is constantly inspired by the stories of
              immigrants that she hears daily, and their will to come to the
              United States in pursuit of a better life for their families.
              Chantelle believes that immigration services should be accessible
              to all despite their financial or personal situations. If you need
              immigration defense help, we would gladly be willing to listen to
              the details of your case and assess whether we can help.{" "}
            </p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
