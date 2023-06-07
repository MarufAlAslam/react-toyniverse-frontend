import React from "react";
import productImg from "../../assets/images/product.jpg";
import ProductCard from "../product-card";

const Featured = () => {
  const featuredData = [
    {
      id: 1,
      name: "Glimmering Stars Teddy Bear",
      price: 5000,
      description: (
        <p>
          Introducing our "Glimmering Stars Teddy Bear" - a truly celestial
          companion that will capture your heart with its enchanting beauty.
          This extraordinary teddy bear is adorned with a sprinkle of shimmering
          stars, turning it into a celestial wonder.
          <br />
          <br />
          Handcrafted with meticulous attention to detail, the Glimmering Stars
          Teddy Bear is made from the softest, high-quality materials to provide
          an irresistibly huggable experience. Its plush fur is as velvety as a
          moonlit sky, and its mesmerizing eyes seem to hold the mysteries of
          the universe.
          <br />
          <br />
          Every cuddle with this celestial friend feels like a magical journey
          among the stars. Its delicate features are delicately embroidered,
          including a charming nose and a smile that radiates warmth and
          comfort. With its medium size, this teddy bear is perfect for both
          children and adults, making it an ideal companion for anyone seeking
          celestial love and gentle companionship.
          <br />
          <br />
          Whether as a gift for a special occasion or as a personal treasure,
          the Glimmering Stars Teddy Bear brings a touch of celestial elegance
          to any setting. It is a reminder that amidst the vastness of the
          cosmos, we can always find comfort, love, and a sense of wonder in the
          embrace of a cherished teddy bear.
          <br />
          <br />
          Indulge in the enchantment of the Glimmering Stars Teddy Bear and let
          its celestial magic illuminate your days and nights. Create
          unforgettable moments of joy and embark on celestial adventures with
          this extraordinary companion by your side. Embrace the beauty of the
          universe in the form of a teddy bear and experience the blissful
          cuddles it brings.
        </p>
      ),
      image: productImg,
      rating: 4.5,
      reviews: [
        {
          id: 1,
          name: "Emily Johnson",
          rating: 5,
          comment:
            "Toyniverse is a delightful wonderland of teddy bears! The quality of their products is exceptional, and the attention to detail is remarkable. I couldn't resist adding a new furry friend to my collection. Highly recommended!",
        },
        {
          id: 2,
          name: "David Thompson",
          rating: 4,
          comment:
            "I recently purchased a teddy bear from Toyniverse, and I must say, I'm quite impressed. The craftsmanship is excellent, and the plush material used is incredibly soft. My little one adores their new cuddly companion!",
        },
        {
          id: 3,
          name: "Sophia Anderson",
          rating: 5,
          comment:
            "Toyniverse is the perfect place to find the most adorable teddy bears. The variety of designs and sizes available is fantastic, catering to every teddy bear enthusiast's taste. I'm beyond happy with my purchase!",
        },
        {
          id: 4,
          name: "Michael Roberts",
          rating: 4.5,
          comment:
            "I've always been a fan of teddy bears, and Toyniverse exceeded my expectations. Their collection is extensive, and the bears are incredibly huggable. The prompt delivery and excellent customer service make the experience even better.",
        },
        {
          id: 5,
          name: "Olivia Davis",
          rating: 5,
          comment:
            "Toyniverse is a magical world for teddy bear lovers! The designs are enchanting, and the bears are made with utmost care. Each bear has its own unique charm, making it impossible to resist. I'm already planning my next purchase!",
        },
      ],
    },
    {
      id: 2,
      name: "Glimmering Stars Teddy Bear",
      price: 5000,
      description: (
        <p>
          Introducing our "Glimmering Stars Teddy Bear" - a truly celestial
          companion that will capture your heart with its enchanting beauty.
          This extraordinary teddy bear is adorned with a sprinkle of shimmering
          stars, turning it into a celestial wonder.
          <br />
          <br />
          Handcrafted with meticulous attention to detail, the Glimmering Stars
          Teddy Bear is made from the softest, high-quality materials to provide
          an irresistibly huggable experience. Its plush fur is as velvety as a
          moonlit sky, and its mesmerizing eyes seem to hold the mysteries of
          the universe.
          <br />
          <br />
          Every cuddle with this celestial friend feels like a magical journey
          among the stars. Its delicate features are delicately embroidered,
          including a charming nose and a smile that radiates warmth and
          comfort. With its medium size, this teddy bear is perfect for both
          children and adults, making it an ideal companion for anyone seeking
          celestial love and gentle companionship.
          <br />
          <br />
          Whether as a gift for a special occasion or as a personal treasure,
          the Glimmering Stars Teddy Bear brings a touch of celestial elegance
          to any setting. It is a reminder that amidst the vastness of the
          cosmos, we can always find comfort, love, and a sense of wonder in the
          embrace of a cherished teddy bear.
          <br />
          <br />
          Indulge in the enchantment of the Glimmering Stars Teddy Bear and let
          its celestial magic illuminate your days and nights. Create
          unforgettable moments of joy and embark on celestial adventures with
          this extraordinary companion by your side. Embrace the beauty of the
          universe in the form of a teddy bear and experience the blissful
          cuddles it brings.
        </p>
      ),
      image: productImg,
      rating: 4.5,
      reviews: [
        {
          id: 1,
          name: "Emily Johnson",
          rating: 5,
          comment:
            "Toyniverse is a delightful wonderland of teddy bears! The quality of their products is exceptional, and the attention to detail is remarkable. I couldn't resist adding a new furry friend to my collection. Highly recommended!",
        },
        {
          id: 2,
          name: "David Thompson",
          rating: 4,
          comment:
            "I recently purchased a teddy bear from Toyniverse, and I must say, I'm quite impressed. The craftsmanship is excellent, and the plush material used is incredibly soft. My little one adores their new cuddly companion!",
        },
        {
          id: 3,
          name: "Sophia Anderson",
          rating: 5,
          comment:
            "Toyniverse is the perfect place to find the most adorable teddy bears. The variety of designs and sizes available is fantastic, catering to every teddy bear enthusiast's taste. I'm beyond happy with my purchase!",
        },
        {
          id: 4,
          name: "Michael Roberts",
          rating: 4.5,
          comment:
            "I've always been a fan of teddy bears, and Toyniverse exceeded my expectations. Their collection is extensive, and the bears are incredibly huggable. The prompt delivery and excellent customer service make the experience even better.",
        },
        {
          id: 5,
          name: "Olivia Davis",
          rating: 5,
          comment:
            "Toyniverse is a magical world for teddy bear lovers! The designs are enchanting, and the bears are made with utmost care. Each bear has its own unique charm, making it impossible to resist. I'm already planning my next purchase!",
        },
      ],
    },
    {
      id: 3,
      name: "Glimmering Stars Teddy Bear",
      price: 5000,
      description: (
        <p>
          Introducing our "Glimmering Stars Teddy Bear" - a truly celestial
          companion that will capture your heart with its enchanting beauty.
          This extraordinary teddy bear is adorned with a sprinkle of shimmering
          stars, turning it into a celestial wonder.
          <br />
          <br />
          Handcrafted with meticulous attention to detail, the Glimmering Stars
          Teddy Bear is made from the softest, high-quality materials to provide
          an irresistibly huggable experience. Its plush fur is as velvety as a
          moonlit sky, and its mesmerizing eyes seem to hold the mysteries of
          the universe.
          <br />
          <br />
          Every cuddle with this celestial friend feels like a magical journey
          among the stars. Its delicate features are delicately embroidered,
          including a charming nose and a smile that radiates warmth and
          comfort. With its medium size, this teddy bear is perfect for both
          children and adults, making it an ideal companion for anyone seeking
          celestial love and gentle companionship.
          <br />
          <br />
          Whether as a gift for a special occasion or as a personal treasure,
          the Glimmering Stars Teddy Bear brings a touch of celestial elegance
          to any setting. It is a reminder that amidst the vastness of the
          cosmos, we can always find comfort, love, and a sense of wonder in the
          embrace of a cherished teddy bear.
          <br />
          <br />
          Indulge in the enchantment of the Glimmering Stars Teddy Bear and let
          its celestial magic illuminate your days and nights. Create
          unforgettable moments of joy and embark on celestial adventures with
          this extraordinary companion by your side. Embrace the beauty of the
          universe in the form of a teddy bear and experience the blissful
          cuddles it brings.
        </p>
      ),
      image: productImg,
      rating: 4.5,
      reviews: [
        {
          id: 1,
          name: "Emily Johnson",
          rating: 5,
          comment:
            "Toyniverse is a delightful wonderland of teddy bears! The quality of their products is exceptional, and the attention to detail is remarkable. I couldn't resist adding a new furry friend to my collection. Highly recommended!",
        },
        {
          id: 2,
          name: "David Thompson",
          rating: 4,
          comment:
            "I recently purchased a teddy bear from Toyniverse, and I must say, I'm quite impressed. The craftsmanship is excellent, and the plush material used is incredibly soft. My little one adores their new cuddly companion!",
        },
        {
          id: 3,
          name: "Sophia Anderson",
          rating: 5,
          comment:
            "Toyniverse is the perfect place to find the most adorable teddy bears. The variety of designs and sizes available is fantastic, catering to every teddy bear enthusiast's taste. I'm beyond happy with my purchase!",
        },
        {
          id: 4,
          name: "Michael Roberts",
          rating: 4.5,
          comment:
            "I've always been a fan of teddy bears, and Toyniverse exceeded my expectations. Their collection is extensive, and the bears are incredibly huggable. The prompt delivery and excellent customer service make the experience even better.",
        },
        {
          id: 5,
          name: "Olivia Davis",
          rating: 5,
          comment:
            "Toyniverse is a magical world for teddy bear lovers! The designs are enchanting, and the bears are made with utmost care. Each bear has its own unique charm, making it impossible to resist. I'm already planning my next purchase!",
        },
      ],
    },
    {
      id: 4,
      name: "Glimmering Stars Teddy Bear",
      price: 5000,
      description: (
        <p>
          Introducing our "Glimmering Stars Teddy Bear" - a truly celestial
          companion that will capture your heart with its enchanting beauty.
          This extraordinary teddy bear is adorned with a sprinkle of shimmering
          stars, turning it into a celestial wonder.
          <br />
          <br />
          Handcrafted with meticulous attention to detail, the Glimmering Stars
          Teddy Bear is made from the softest, high-quality materials to provide
          an irresistibly huggable experience. Its plush fur is as velvety as a
          moonlit sky, and its mesmerizing eyes seem to hold the mysteries of
          the universe.
          <br />
          <br />
          Every cuddle with this celestial friend feels like a magical journey
          among the stars. Its delicate features are delicately embroidered,
          including a charming nose and a smile that radiates warmth and
          comfort. With its medium size, this teddy bear is perfect for both
          children and adults, making it an ideal companion for anyone seeking
          celestial love and gentle companionship.
          <br />
          <br />
          Whether as a gift for a special occasion or as a personal treasure,
          the Glimmering Stars Teddy Bear brings a touch of celestial elegance
          to any setting. It is a reminder that amidst the vastness of the
          cosmos, we can always find comfort, love, and a sense of wonder in the
          embrace of a cherished teddy bear.
          <br />
          <br />
          Indulge in the enchantment of the Glimmering Stars Teddy Bear and let
          its celestial magic illuminate your days and nights. Create
          unforgettable moments of joy and embark on celestial adventures with
          this extraordinary companion by your side. Embrace the beauty of the
          universe in the form of a teddy bear and experience the blissful
          cuddles it brings.
        </p>
      ),
      image: productImg,
      rating: 4.5,
      reviews: [
        {
          id: 1,
          name: "Emily Johnson",
          rating: 5,
          comment:
            "Toyniverse is a delightful wonderland of teddy bears! The quality of their products is exceptional, and the attention to detail is remarkable. I couldn't resist adding a new furry friend to my collection. Highly recommended!",
        },
        {
          id: 2,
          name: "David Thompson",
          rating: 4,
          comment:
            "I recently purchased a teddy bear from Toyniverse, and I must say, I'm quite impressed. The craftsmanship is excellent, and the plush material used is incredibly soft. My little one adores their new cuddly companion!",
        },
        {
          id: 3,
          name: "Sophia Anderson",
          rating: 5,
          comment:
            "Toyniverse is the perfect place to find the most adorable teddy bears. The variety of designs and sizes available is fantastic, catering to every teddy bear enthusiast's taste. I'm beyond happy with my purchase!",
        },
        {
          id: 4,
          name: "Michael Roberts",
          rating: 4.5,
          comment:
            "I've always been a fan of teddy bears, and Toyniverse exceeded my expectations. Their collection is extensive, and the bears are incredibly huggable. The prompt delivery and excellent customer service make the experience even better.",
        },
        {
          id: 5,
          name: "Olivia Davis",
          rating: 5,
          comment:
            "Toyniverse is a magical world for teddy bear lovers! The designs are enchanting, and the bears are made with utmost care. Each bear has its own unique charm, making it impossible to resist. I'm already planning my next purchase!",
        },
      ],
    },
    {
      id: 5,
      name: "Glimmering Stars Teddy Bear",
      price: 5000,
      description: (
        <p>
          Introducing our "Glimmering Stars Teddy Bear" - a truly celestial
          companion that will capture your heart with its enchanting beauty.
          This extraordinary teddy bear is adorned with a sprinkle of shimmering
          stars, turning it into a celestial wonder.
          <br />
          <br />
          Handcrafted with meticulous attention to detail, the Glimmering Stars
          Teddy Bear is made from the softest, high-quality materials to provide
          an irresistibly huggable experience. Its plush fur is as velvety as a
          moonlit sky, and its mesmerizing eyes seem to hold the mysteries of
          the universe.
          <br />
          <br />
          Every cuddle with this celestial friend feels like a magical journey
          among the stars. Its delicate features are delicately embroidered,
          including a charming nose and a smile that radiates warmth and
          comfort. With its medium size, this teddy bear is perfect for both
          children and adults, making it an ideal companion for anyone seeking
          celestial love and gentle companionship.
          <br />
          <br />
          Whether as a gift for a special occasion or as a personal treasure,
          the Glimmering Stars Teddy Bear brings a touch of celestial elegance
          to any setting. It is a reminder that amidst the vastness of the
          cosmos, we can always find comfort, love, and a sense of wonder in the
          embrace of a cherished teddy bear.
          <br />
          <br />
          Indulge in the enchantment of the Glimmering Stars Teddy Bear and let
          its celestial magic illuminate your days and nights. Create
          unforgettable moments of joy and embark on celestial adventures with
          this extraordinary companion by your side. Embrace the beauty of the
          universe in the form of a teddy bear and experience the blissful
          cuddles it brings.
        </p>
      ),
      image: productImg,
      rating: 4.5,
      reviews: [
        {
          id: 1,
          name: "Emily Johnson",
          rating: 5,
          comment:
            "Toyniverse is a delightful wonderland of teddy bears! The quality of their products is exceptional, and the attention to detail is remarkable. I couldn't resist adding a new furry friend to my collection. Highly recommended!",
        },
        {
          id: 2,
          name: "David Thompson",
          rating: 4,
          comment:
            "I recently purchased a teddy bear from Toyniverse, and I must say, I'm quite impressed. The craftsmanship is excellent, and the plush material used is incredibly soft. My little one adores their new cuddly companion!",
        },
        {
          id: 3,
          name: "Sophia Anderson",
          rating: 5,
          comment:
            "Toyniverse is the perfect place to find the most adorable teddy bears. The variety of designs and sizes available is fantastic, catering to every teddy bear enthusiast's taste. I'm beyond happy with my purchase!",
        },
        {
          id: 4,
          name: "Michael Roberts",
          rating: 4.5,
          comment:
            "I've always been a fan of teddy bears, and Toyniverse exceeded my expectations. Their collection is extensive, and the bears are incredibly huggable. The prompt delivery and excellent customer service make the experience even better.",
        },
        {
          id: 5,
          name: "Olivia Davis",
          rating: 5,
          comment:
            "Toyniverse is a magical world for teddy bear lovers! The designs are enchanting, and the bears are made with utmost care. Each bear has its own unique charm, making it impossible to resist. I'm already planning my next purchase!",
        },
      ],
    },
    {
      id: 6,
      name: "Glimmering Stars Teddy Bear",
      price: 5000,
      description: (
        <p>
          Introducing our "Glimmering Stars Teddy Bear" - a truly celestial
          companion that will capture your heart with its enchanting beauty.
          This extraordinary teddy bear is adorned with a sprinkle of shimmering
          stars, turning it into a celestial wonder.
          <br />
          <br />
          Handcrafted with meticulous attention to detail, the Glimmering Stars
          Teddy Bear is made from the softest, high-quality materials to provide
          an irresistibly huggable experience. Its plush fur is as velvety as a
          moonlit sky, and its mesmerizing eyes seem to hold the mysteries of
          the universe.
          <br />
          <br />
          Every cuddle with this celestial friend feels like a magical journey
          among the stars. Its delicate features are delicately embroidered,
          including a charming nose and a smile that radiates warmth and
          comfort. With its medium size, this teddy bear is perfect for both
          children and adults, making it an ideal companion for anyone seeking
          celestial love and gentle companionship.
          <br />
          <br />
          Whether as a gift for a special occasion or as a personal treasure,
          the Glimmering Stars Teddy Bear brings a touch of celestial elegance
          to any setting. It is a reminder that amidst the vastness of the
          cosmos, we can always find comfort, love, and a sense of wonder in the
          embrace of a cherished teddy bear.
          <br />
          <br />
          Indulge in the enchantment of the Glimmering Stars Teddy Bear and let
          its celestial magic illuminate your days and nights. Create
          unforgettable moments of joy and embark on celestial adventures with
          this extraordinary companion by your side. Embrace the beauty of the
          universe in the form of a teddy bear and experience the blissful
          cuddles it brings.
        </p>
      ),
      image: productImg,
      rating: 4.5,
      reviews: [
        {
          id: 1,
          name: "Emily Johnson",
          rating: 5,
          comment:
            "Toyniverse is a delightful wonderland of teddy bears! The quality of their products is exceptional, and the attention to detail is remarkable. I couldn't resist adding a new furry friend to my collection. Highly recommended!",
        },
        {
          id: 2,
          name: "David Thompson",
          rating: 4,
          comment:
            "I recently purchased a teddy bear from Toyniverse, and I must say, I'm quite impressed. The craftsmanship is excellent, and the plush material used is incredibly soft. My little one adores their new cuddly companion!",
        },
        {
          id: 3,
          name: "Sophia Anderson",
          rating: 5,
          comment:
            "Toyniverse is the perfect place to find the most adorable teddy bears. The variety of designs and sizes available is fantastic, catering to every teddy bear enthusiast's taste. I'm beyond happy with my purchase!",
        },
        {
          id: 4,
          name: "Michael Roberts",
          rating: 4.5,
          comment:
            "I've always been a fan of teddy bears, and Toyniverse exceeded my expectations. Their collection is extensive, and the bears are incredibly huggable. The prompt delivery and excellent customer service make the experience even better.",
        },
        {
          id: 5,
          name: "Olivia Davis",
          rating: 5,
          comment:
            "Toyniverse is a magical world for teddy bear lovers! The designs are enchanting, and the bears are made with utmost care. Each bear has its own unique charm, making it impossible to resist. I'm already planning my next purchase!",
        },
      ],
    },
    {
      id: 7,
      name: "Glimmering Stars Teddy Bear",
      price: 5000,
      description: (
        <p>
          Introducing our "Glimmering Stars Teddy Bear" - a truly celestial
          companion that will capture your heart with its enchanting beauty.
          This extraordinary teddy bear is adorned with a sprinkle of shimmering
          stars, turning it into a celestial wonder.
          <br />
          <br />
          Handcrafted with meticulous attention to detail, the Glimmering Stars
          Teddy Bear is made from the softest, high-quality materials to provide
          an irresistibly huggable experience. Its plush fur is as velvety as a
          moonlit sky, and its mesmerizing eyes seem to hold the mysteries of
          the universe.
          <br />
          <br />
          Every cuddle with this celestial friend feels like a magical journey
          among the stars. Its delicate features are delicately embroidered,
          including a charming nose and a smile that radiates warmth and
          comfort. With its medium size, this teddy bear is perfect for both
          children and adults, making it an ideal companion for anyone seeking
          celestial love and gentle companionship.
          <br />
          <br />
          Whether as a gift for a special occasion or as a personal treasure,
          the Glimmering Stars Teddy Bear brings a touch of celestial elegance
          to any setting. It is a reminder that amidst the vastness of the
          cosmos, we can always find comfort, love, and a sense of wonder in the
          embrace of a cherished teddy bear.
          <br />
          <br />
          Indulge in the enchantment of the Glimmering Stars Teddy Bear and let
          its celestial magic illuminate your days and nights. Create
          unforgettable moments of joy and embark on celestial adventures with
          this extraordinary companion by your side. Embrace the beauty of the
          universe in the form of a teddy bear and experience the blissful
          cuddles it brings.
        </p>
      ),
      image: productImg,
      rating: 4.5,
      reviews: [
        {
          id: 1,
          name: "Emily Johnson",
          rating: 5,
          comment:
            "Toyniverse is a delightful wonderland of teddy bears! The quality of their products is exceptional, and the attention to detail is remarkable. I couldn't resist adding a new furry friend to my collection. Highly recommended!",
        },
        {
          id: 2,
          name: "David Thompson",
          rating: 4,
          comment:
            "I recently purchased a teddy bear from Toyniverse, and I must say, I'm quite impressed. The craftsmanship is excellent, and the plush material used is incredibly soft. My little one adores their new cuddly companion!",
        },
        {
          id: 3,
          name: "Sophia Anderson",
          rating: 5,
          comment:
            "Toyniverse is the perfect place to find the most adorable teddy bears. The variety of designs and sizes available is fantastic, catering to every teddy bear enthusiast's taste. I'm beyond happy with my purchase!",
        },
        {
          id: 4,
          name: "Michael Roberts",
          rating: 4.5,
          comment:
            "I've always been a fan of teddy bears, and Toyniverse exceeded my expectations. Their collection is extensive, and the bears are incredibly huggable. The prompt delivery and excellent customer service make the experience even better.",
        },
        {
          id: 5,
          name: "Olivia Davis",
          rating: 5,
          comment:
            "Toyniverse is a magical world for teddy bear lovers! The designs are enchanting, and the bears are made with utmost care. Each bear has its own unique charm, making it impossible to resist. I'm already planning my next purchase!",
        },
      ],
    },
    {
      id: 8,
      name: "Glimmering Stars Teddy Bear",
      price: 5000,
      description: (
        <p>
          Introducing our "Glimmering Stars Teddy Bear" - a truly celestial
          companion that will capture your heart with its enchanting beauty.
          This extraordinary teddy bear is adorned with a sprinkle of shimmering
          stars, turning it into a celestial wonder.
          <br />
          <br />
          Handcrafted with meticulous attention to detail, the Glimmering Stars
          Teddy Bear is made from the softest, high-quality materials to provide
          an irresistibly huggable experience. Its plush fur is as velvety as a
          moonlit sky, and its mesmerizing eyes seem to hold the mysteries of
          the universe.
          <br />
          <br />
          Every cuddle with this celestial friend feels like a magical journey
          among the stars. Its delicate features are delicately embroidered,
          including a charming nose and a smile that radiates warmth and
          comfort. With its medium size, this teddy bear is perfect for both
          children and adults, making it an ideal companion for anyone seeking
          celestial love and gentle companionship.
          <br />
          <br />
          Whether as a gift for a special occasion or as a personal treasure,
          the Glimmering Stars Teddy Bear brings a touch of celestial elegance
          to any setting. It is a reminder that amidst the vastness of the
          cosmos, we can always find comfort, love, and a sense of wonder in the
          embrace of a cherished teddy bear.
          <br />
          <br />
          Indulge in the enchantment of the Glimmering Stars Teddy Bear and let
          its celestial magic illuminate your days and nights. Create
          unforgettable moments of joy and embark on celestial adventures with
          this extraordinary companion by your side. Embrace the beauty of the
          universe in the form of a teddy bear and experience the blissful
          cuddles it brings.
        </p>
      ),
      image: productImg,
      rating: 4.5,
      reviews: [
        {
          id: 1,
          name: "Emily Johnson",
          rating: 5,
          comment:
            "Toyniverse is a delightful wonderland of teddy bears! The quality of their products is exceptional, and the attention to detail is remarkable. I couldn't resist adding a new furry friend to my collection. Highly recommended!",
        },
        {
          id: 2,
          name: "David Thompson",
          rating: 4,
          comment:
            "I recently purchased a teddy bear from Toyniverse, and I must say, I'm quite impressed. The craftsmanship is excellent, and the plush material used is incredibly soft. My little one adores their new cuddly companion!",
        },
        {
          id: 3,
          name: "Sophia Anderson",
          rating: 5,
          comment:
            "Toyniverse is the perfect place to find the most adorable teddy bears. The variety of designs and sizes available is fantastic, catering to every teddy bear enthusiast's taste. I'm beyond happy with my purchase!",
        },
        {
          id: 4,
          name: "Michael Roberts",
          rating: 4.5,
          comment:
            "I've always been a fan of teddy bears, and Toyniverse exceeded my expectations. Their collection is extensive, and the bears are incredibly huggable. The prompt delivery and excellent customer service make the experience even better.",
        },
        {
          id: 5,
          name: "Olivia Davis",
          rating: 5,
          comment:
            "Toyniverse is a magical world for teddy bear lovers! The designs are enchanting, and the bears are made with utmost care. Each bear has its own unique charm, making it impossible to resist. I'm already planning my next purchase!",
        },
      ],
    },
  ];
  return (
    <div className="featured py-10">
      <div className="custom-container">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Featured Products</h2>

          <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            {featuredData.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
