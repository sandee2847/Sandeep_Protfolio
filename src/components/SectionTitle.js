const SectionTitle = ({ heading, subHeading, text, portfolio }) => {
  return (
    <div className="row section-heading">
      <div className="col-lg-12">
        <h6>
          <span>{subHeading}</span>
        </h6>
        <h3>
          <span>{heading}</span>
        </h3>
        {text && <p><b>React.js:</b> {text}</p>}
        {portfolio === false && <><p><b>Gantt Chart: </b> The project utilizes DHTMLX Gantt Chart, JavaScript, React.js, and Redux Toolkit. A Gantt chart visually represents project tasks, durations, dependencies, and timelines, aiding effective project planning and management. JavaScript powers dynamic functionality, React.js enables interactive UI development, and Redux Toolkit ensures streamlined state management. This tech stack ensures efficient task tracking, seamless user experience, and optimized performance.</p>
          <p><b>File Manager: </b>Utilizing a tech stack consisting of React, Redux Toolkit, and JavaScript, the project brought to life a sophisticated file manager. This intuitive tool facilitated seamless file upload, categorization, and retrieval, enhancing collaboration through advanced search functionalities and customizable tags. By streamlining workflows, the file manager significantly boosted productivity, offering users an efficient solution for managing their files effortlessly.</p>
          <p><b>Account: </b>An account, in the context of payment and billing, serves as a user's profile within a financial system or service. It enables individuals or organizations to manage payment methods, billing information, and transaction history. Users can store payment details securely, view past invoices, and manage recurring payments or subscriptions through their account. Additionally, accounts may offer features for setting up automatic payments, tracking expenses, and receiving notifications about billing activities. Overall, accounts streamline the payment and billing process, providing users with a centralized platform to manage their financial transactions efficiently.</p>
        </>}
      </div>
    </div>
  );
};
export default SectionTitle;
