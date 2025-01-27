

const FeaturedCarouselItem = ({logo}:{logo: any}) => {
  return (
    <div className="bg-featured-card max-h-[75px] rounded-[100px] p-[1.5px] overflow-hidden w-fit h-fit">
      <div className="bg-featured-card-bg max-h-[72.5px] px-[55px] py-[22px] rounded-[101.5px] w-fit">
        {logo}
      </div>
    </div>
  )
}

export default FeaturedCarouselItem