import Dubai from "@/assets/images/branches/dubai.webp";
import Miami from "@/assets/images/branches/miami.webp";
import NewYork from "@/assets/images/branches/new-york.webp";
import LosAngeles from "@/assets/images/branches/la.webp";
import Sydney from "@/assets/images/branches/sidney.webp";
import London from "@/assets/images/branches/london.webp";
import GoldCoast from "@/assets/images/branches/gold-coast.webp";
import HoverBranchCard from "../ui/hover-branch-card";
import BranchesCarousel from "../ui/branches-carousel";

const branches = [
  { id: "Dubai", location: "Dubai", image: Dubai, alt: "Dubai" },
  { id: "Miami", location: "Miami", image: Miami, alt: "Miami" },
  { id: "NewYork", location: "NewYork", image: NewYork, alt: "NewYork" },
  {
    id: "LosAngeles",
    location: "LosAngeles",
    image: LosAngeles,
    alt: "LosAngeles",
  },
  { id: "Sydney", location: "Sydney", image: Sydney, alt: "Sydney" },
  { id: "London", location: "London", image: London, alt: "London" },
  {
    id: "GoldCoast",
    location: "GoldCoast",
    image: GoldCoast,
    alt: "GoldCoast",
  },
];

const Branches = () => {
  return (
    <section className="w-full bg-marble-bg-big bg-cover pb-[7rem]">
      <div className="container mx-auto px-6 flex flex-col items-center gap-12 pt-[4.8125rem] pb-[6.125rem] md:pb-[8rem]">
        <h4 className="text-white text-h4-mobile md:text-h4 text-center">
          Our <span className="primary-gradient-text">Global Branches</span>
        </h4>
        <h5 className="text-white text-sub-title-mobile md:text-sub-title text-center w-full md:w-2/3">
          A worldwide network of industry experts. <br/> From London through Dubai to
          Los Angeles, we're by your side.
        </h5>
      </div>
      <div className="gap-1 ml-3 relative hidden md:flex">
        <h1 className="text-white text-h1 md:text-h1 uppercase absolute -z-[0] -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          Elluxe Agency
        </h1>
        <h1 className="outline-text-logo text-h1-mobile md:text-h1 uppercase absolute z-[1] -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          Elluxe Agency
        </h1>
        {branches.map((branch) => (
          <HoverBranchCard
            key={branch.id}
            imageSrc={branch.image}
            altText={branch.alt}
            hoverText={branch.location}
          />
        ))}
      </div>
      <div className="flex md:hidden">
        <BranchesCarousel/>
      </div>
    </section>
  );
};

export default Branches;
