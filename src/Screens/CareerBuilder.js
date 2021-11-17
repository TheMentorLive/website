import CareerCards from "../Components/CareerCards";
import CareerChooser from "../Components/CareerChooser";
import CareerLanding from "../Components/CareerLanding";
import PlacementPrep from "../Components/PlacementPrep";
import '../Style/CareerBuilder.css';

const CareerBuilder = () => {
  return(
      <div>
          <CareerLanding/>
          <CareerCards/>
          <CareerChooser/>
          <PlacementPrep/>
      </div>
  );
};

export default CareerBuilder;
