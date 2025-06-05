
import Title from "./Title"
import FlatItem from "./FlatItem"

const FlatList = () => {
    const title = {
        text: "Premium Flats",
        description: "2 & 3 BHK Housing Plots"
    }
    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <FlatItem slug="flat_detail-1" />
                    <FlatItem slug="flat_detail-2" />
                    <FlatItem slug="flat_detail-3" />
                    <FlatItem slug="flat_detail-4" />
                    <FlatItem slug="flat_detail-5" />
                    <FlatItem slug="flat_detail-6" />  
                </div>
            </div>
        </section>
    )

}

export default FlatList;