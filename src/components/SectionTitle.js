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
        {text && (
          <p>
            <b>React.js:</b> {text}
          </p>
        )}
        {portfolio === false && (
          <>
            <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>
                File Manager Version 1
              </h5>
              <p>
                <b>Description: </b> Developed a File Manager React app focusing
                on efficient file organization and management, featuring a
                user-friendly interface for seamless navigation and interaction
                with digital files. Supports basic operations such as viewing,
                editing, and moving files.
              </p>
              <p>
                <b>Features: </b> File Upload, Create Folder, Send File for
                Execution, Approval Status, File Sent for Approval, File Sent to
                Client, Comment on File, Feedback on File, Version Control, File
                Sharing, Search and Filter, Real-time Notifications, Access
                Control, Audit Trail, Drag and Drop Interface
              </p>
            </div>
            <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>
                File Manager Version 2
              </h5>
              <p>
                <b>Description: </b> Developed an advanced File Manager React
                app (Version 2) with extensive features for comprehensive file
                organization and management. Designed to enhance usability and
                efficiency in handling digital assets.
              </p>
              <div>
                <p>
                  <b>Features: </b>
                </p>
                <p>
                  <b>Folder Management:</b> Allows manual or automatic folder
                  creation, with actions like rename, upload, create subfolder,
                  download, archive (conditional), delete (conditional), and
                  share.
                </p>
                <p>
                  <b>File Management:</b> Upload files individually or in bulk,
                  check for duplicates before uploading, manage actions like
                  request approval, withdraw approval, create transmittal, mark
                  as approved, upload new versions, move, download, rename,
                  delete, view version history, share among users, and view
                  details.
                </p>
                <p>
                  <b>Screens and Sections:</b> Includes All Files, Approval
                  Status, GFC (Global File Cabinet), Other Transmittal,
                  Archived, and Settings.
                </p>
                <p>
                  <b>Settings:</b> Configure settings such as displaying
                  transmittals and approvals, manage folder structure, add new
                  reasons for file transmittal, and utilize search and filtering
                  capabilities.
                </p>
                <p>
                  <b>Collaboration and Annotation:</b> Users can comment on
                  files and open files for editing, enabling markup for issue
                  tracking with tools like circle, square, and freehand drawing.
                </p>
              </div>
            </div>
            <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>
                Account / Bookkeeping:
              </h5>
              <p>
                <b>Description: </b> Developed the Account module as part of an
                ERP SaaS product tailored for architect and interior design
                firms. This module streamlines financial management and
                accounting processes within the firms, providing comprehensive
                tools for handling their financial operations.
              </p>
              <p>
                <b>Features: </b> Invoice Management, Expense Tracking,
                Budgeting, Financial Reporting, Client and Vendor Management,
                Payment Processing, Tax Management, Multi-Currency Support,
                Audit Trail
              </p>
            </div>
            <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>
                Timeline & Task Manager
              </h5>
              <p>
                <b>Description: </b> Developed the Timeline and Task Manager
                modules as integral components of an ERP SaaS product for
                architect and interior design firms. These modules are designed
                to enhance project management and streamline task coordination,
                ensuring efficient workflow and productivity
              </p>
              <p>
                <b>Features: </b> The Timeline module includes project
                milestones, Gantt chart integration, a timeline view of tasks
                and events, drag-and-drop scheduling, deadline tracking,
                dependencies and predecessors, real-time updates and
                notifications, and historical data access. The Task Manager
                module offers task creation and assignment, prioritization and
                status tracking, subtask management, due dates and reminders,
                task comments and collaboration, progress indicators,
                customizable tags and labels, and time tracking and reporting
              </p>
              <p className="mt-2">
                <b>Additional Work in idesign.market:</b> Quotation Management,
                MOM (Minutes of Meeting), Material Library
              </p>
            </div>
            {/* backend project */}
            <h4 className="mt-5">Backend Projects</h4>
            <div>
              <h5 style={{ textDecoration: "underline" }}>Task Manager</h5>
              <p>
                <b>Description: </b> A RESTful API for managing tasks. Users can
                create, read, update, and delete tasks. The application should
                include user authentication and authorization.
              </p>
              <p>
                <b>Features: </b> User registration and login (JWT
                authentication), CRUD operations for tasks, Task categories and
                priorities, Task deadlines and reminders, User profile
                management
              </p>
            </div>
            <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>E-commerce</h5>
              <p>
                <b>Description: </b> A backend API for an e-commerce platform.
                This project involves creating APIs for product management, user
                authentication, order processing, and payment integration.
              </p>
              <p>
                <b>Features: </b> User registration and login (JWT
                authentication), CRUD operations for products, Shopping cart
                functionality, Order management (create, update, view orders),
                Payment integration razorPay, User profile management
              </p>
            </div>
            <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>
                Event Booking System
              </h5>
              <p>
                <b>Description: </b> An application for booking events. Users
                can browse events, book tickets, and manage their bookings.
              </p>
              <p>
                <b>Features: </b> User registration and login (JWT
                authentication), CRUD operations for events, Event search and
                filtering, Ticket booking and payment integration, view orders),
                Booking management (view, cancel bookings), Event organizer
                profiles
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default SectionTitle;
