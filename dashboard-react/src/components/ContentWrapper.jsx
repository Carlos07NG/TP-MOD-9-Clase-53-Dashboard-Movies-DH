import { Footer } from './Footer'
import { ContentRowTop } from './ContentRowTop'
import { TopBar } from './TopBar'

export const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <TopBar/>
                <ContentRowTop/>

            </div>

            <Footer/>

        </div>
    )
}