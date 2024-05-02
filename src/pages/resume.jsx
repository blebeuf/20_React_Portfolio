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
    <div className="container">
      <h2>My Resume</h2>
      <div>
        <embed src={resume} type="application/pdf" width="100%" height="600px" />
      </div>
      <div>
        <button className="btn btn-primary mt-3" onClick={handleDownloadClick}>
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;