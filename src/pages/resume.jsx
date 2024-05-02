import "./resume.css";

function Resume() {
  const resume = '/BryanLebeuf_CV_2024.pdf';

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'BryanLebeuf_CV_2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <div className="resume-embed">
        <embed src={resume} type="application/pdf" width="100%" height="600px" />
      </div>
      <div className="resume-download">
        <button className="btn btn-primary mt-3" onClick={handleDownloadClick}>
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;