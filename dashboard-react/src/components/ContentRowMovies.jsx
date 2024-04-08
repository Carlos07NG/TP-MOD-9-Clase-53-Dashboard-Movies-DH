import MetricCardMovies from "./MetricCardMovies"

const ContentRowMovies = () => {
    const metrics = [
        {
            title : "Movies in Data Base",
            color : "primary",
            value : 21,
            icon : "fa-film"
        },
        {
            title : "Total awards",
            color : "success",
            value : 79,
            icon : "fa-award"
        },
        {
            title : "Actors quantity",
            color : "warning",
            value : 49,
            icon : "fa-user"
        }
    ]
  return (
    <div className="row">
    {
        metrics.map((metric,i )=> <MetricCardMovies key={metric.title + i} metric={metric}/>)
    }
</div>
  )
}

export default ContentRowMovies
