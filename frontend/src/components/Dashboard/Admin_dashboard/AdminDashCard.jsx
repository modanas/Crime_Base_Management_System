const DashCard = ({ cardTitle, cardContent }) => {
	return (
		<>
			<div className="card">
				<div className="card-title">{cardTitle}</div>
				<div className="card-content">{cardContent}</div>
        <a href="">View All</a>
			</div>
		</>
	);
};

export default DashCard;
