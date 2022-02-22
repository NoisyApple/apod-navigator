import "./APODCard.scss"

const APODCard = ({ date, hdurl, media_type, title, url, explanation }) => {
  return (
    <div className="apod-card">
      <h4 className="apod-card__title">{title}</h4>
      <p className="apod-card__date">{date}</p>
      {media_type === "image" ? (
        <a
          href={hdurl}
          target="_blank"
          rel="noreferrer"
          className="apod-card__image-wrapper"
        >
          <img src={url} alt={title} className="apod-card__image" />
        </a>
      ) : (
        <iframe src={url} title={title} className="apod-card__video" />
      )}
      <p className="apod-card__description">{explanation}</p>
    </div>
  )
}

export default APODCard
