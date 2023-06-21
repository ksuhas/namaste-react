import { ShimmerSectionHeader, ShimmerPostList } from "react-shimmer-effects";

const Shimmer = () => {
    return(
        <div data-testid="shimmer" className="loader-section">
            <div className="loader-items">
                <ShimmerSectionHeader subTitle={false} center />
            </div>
            <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
        </div>
    )
}

export default Shimmer;