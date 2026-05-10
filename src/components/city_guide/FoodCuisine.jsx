import FoodCard from "./FoodCard";
import SectionLayout from "./SectionLayout";

const FoodCuisine = () => (
  <SectionLayout icon="fa-utensils" title="Food & Cuisine">
    <div className="grid md:grid-cols-3 gap-6">
      <FoodCard
        img="https://storage.googleapis.com/uxpilot-auth.appspot.com/e643746e1f-61fb91b62abe89d8c112.png"
        title="Street Food"
        desc="Famous for chaat, gol gappa, and local snacks"
        alt="Indian street food chaat golgappa colorful vibrant"
      />
      <FoodCard
        img="https://storage.googleapis.com/uxpilot-auth.appspot.com/8abb74159f-b0618f0a32f4f53da617.png"
        title="Sweets"
        desc="Traditional mithai and local delicacies"
        alt="Traditional Indian sweets mithai colorful display"
      />
      <FoodCard
        img="https://storage.googleapis.com/uxpilot-auth.appspot.com/ad44659d1c-c05f6e666381d19826c5.png"
        title="Main Dishes"
        desc="Authentic North Indian cuisine"
        alt="North Indian thali dal rice curry traditional meal"
      />
    </div>
  </SectionLayout>
);
export default FoodCuisine;