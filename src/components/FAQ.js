import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <div className="my-5 py-5">
      <h1 className="my-5">Frequently Asked Question</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Specializations Certificates</Accordion.Header>
          <Accordion.Body>
            A Specialization is a series of related courses designed to help you
            master a specific topic.Some shorter Specializations include as few
            as three courses and only take a few months to finish. Longer
            Specializations can include ten or more courses and take up to a
            year. You can begin a Specialization byenrolling in the entire
            specializationor a single course in the Specialization.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Apply for Financial Aid or a Scholarship
          </Accordion.Header>
          <Accordion.Body>
            If you can't afford to pay for a Certificate, you can apply for
            Financial Aid or a Scholarship through the link on the course home
            page. You can also view most course materials for free using the
            learners with Financial Aid or Scholarships in a course will be able
            to access all of the course content and complete all work required
            to earn a .Financial Aid and Scholarships only apply to the course
            that the application was approved for.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Video translations</Accordion.Header>
          <Accordion.Body>
            To see translated subtitles for a video, turn subtitles on and
            choose the language you want to see subtitles in.You can see what
            languages are available for a course by checking the course's
            description page. If a language is listed, that means at least 80\%
            of the course's video subtitles have been translated. When you
            search for courses, you can filter your search to find courses that
            have translations in certain languages.Not all videos have subtitles
            in all languages. Coursera currently has limited support for
            right-to-left languages.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Edit and re-submit a peer reviewed assignment
          </Accordion.Header>
          <Accordion.Body>
            If you want to make changes to a peer reviewed assignment after you
            submit it, you can edit and resubmit your assignment.You should only
            resubmit a peer reviewed assignment before your personalized
            deadline.If you don't pass a peer-reviewed assignment:You can
            re-submit the assignment to be graded againIf the deadline has
            passed, you may need to ask for more reviews on the forums
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
