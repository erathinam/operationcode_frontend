import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './partnerSchools.css';

class PartnerSchools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partner_schools: {}
    };
  }

  render() {
    return (
      <Section
        id="schoolsByScholarship"
        title="Partnered Schools"
        theme="white"
        headingLines={false}
        margin
      >
        <div className={styles.intro}>
          <p className={styles.introParagraph}>
            Many code schools around the nation offer military/veterans discounts to make coding
            education more accessible to our veterans.<br />
            We&apos;ve partnered up with those schools in order to help direct veterans to the best
            code schools around the country. <br /> <b>Apply for a scholarship with our partners now and
            get coding:</b>
          </p>
        </div>

        <div className={styles.partnerSchools}>
          <SchoolCard
            schoolName="Thinkful"
            alt="Thinkful Logo"
            link="http://www.thinkful.com"
            schoolAddress="Online"
            logo="https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/images/codeSchoolLogos/thinkful.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
          />
          <SchoolCard
            schoolName="Sabio"
            alt="Sabio Logo"
            link="http://sabio.la/veterans"
            schoolAddress="400 Corporate Pointe"
            schoolCity="Culver City"
            schoolState="CA"
            logo="https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/images/codeSchoolLogos/sabio.jpg"
            GI="Yes"
            fullTime="Full-Time"
            hardware="No"
          />
          <SchoolCard
            schoolName="The Flatiron School"
            alt="Flatiron Logo"
            link="http://flatironschool.com/"
            schoolAddress="11 Broadway, Suite 260"
            schoolCity="New York"
            schoolState="NY"
            logo="https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/images/codeSchoolLogos/flatiron_school.jpg"
            GI="No"
            fullTime="Full-Time"
            hardware="No"
          />
          <SchoolCard
            schoolName="Startup Institute"
            alt="Startup Institute Logo"
            link="https://www.startupinstitute.com/new-york/"
            schoolAddress="25 Broadway, 10th Floor"
            schoolCity="New York"
            schoolState="NY"
            logo="https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/images/codeSchoolLogos/startup_institute.jpg"
            GI="No"
            fullTime="Full-Time"
            hardware="No"
          />
          <SchoolCard
            schoolName="Launch School"
            alt="Launch School Logo"
            link="https://launchschool.com/blog/operation-code-scholarship/"
            schoolAddress="Online"
            logo="https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/images/codeSchoolLogos/launch_school.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
          />
          <SchoolCard
            schoolName="Bloc"
            alt="Bloc Logo"
            link="http://try.bloc.io/operation-code-bootcamp-scholarship/"
            schoolAddress="Online"
            logo="https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/images/codeSchoolLogos/bloc.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
          />
          <SchoolCard
            schoolName="Fullstack Academy"
            alt="Fullstack Academy Logo"
            link="https://www.fullstackacademy.com/remote-immersive#scholarships"
            schoolAddress="Online, Chicago, New York"
            logo="https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/images/codeSchoolLogos/fullstack_academy.jpg"
            GI="No"
            fullTime="Full-Time"
            hardware="No"
          />
        </div>

        <div className={styles.noteForSchoolReps}>
          <p>
            Are you a code school seeking a partnership with Operation Code?
            <br />
            <a href="mailto:staff@operationcode.org">
              Reach out to us!
            </a>
          </p>
        </div>
      </Section>
    );
  }
}

export default PartnerSchools;
