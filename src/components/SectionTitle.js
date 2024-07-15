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
          </>
        )}
      </div>
    </div>
  );
};
export default SectionTitle;
