import type { ProjectItem } from "@/data/types";

export const projectItems: ProjectItem[] = [
  {
    slug: "optical-flow-reliability",
    title: "Predicting Optical Flow Reliability from Motion Scenario Metadata",
    shortTitle: "Optical Flow Reliability",
    summary:
      "Honours project predicting when optical flow will fail using scenario metadata, enabling more reliable vision pipelines.",
    tags: ["Machine Learning", "Computer Vision", "Reliability"],
    tech: ["Python", "NumPy", "Pandas", "scikit-learn", "XGBoost/LightGBM", "Jupyter", "Matplotlib/Seaborn"],
    image: "/images/optical-flow-car.jpg",
    imageAlt: "Placeholder banner for an optical flow reliability project showing a moving vehicle scene.",
    heroEyebrow: "Computer vision reliability",
    overview:
      "A research-oriented ML case study focused on predicting when optical flow estimates are likely to break down, making downstream perception pipelines more robust and interpretable.",
    sections: [
      {
        title: "Problem / Context",
        paragraphs: [
          "Optical flow estimates pixel motion between frames, but in real-world scenarios its reliability changes with scene dynamics, lighting, texture, and movement patterns. That variability matters when the flow output feeds larger perception or decision systems.",
          "This project frames reliability as a prediction problem: can scenario metadata tell us when optical flow is likely to fail before the downstream pipeline trusts it too much?"
        ]
      },
      {
        title: "Implementation Details",
        paragraphs: [
          "The workflow centered on structured scenario metadata and targeted feature engineering rather than only raw visual signals. Features captured motion conditions, environmental context, and indicators that correlate with instability or degraded flow estimates.",
          "Baseline models established a reference point before stronger gradient boosting models were introduced. The full evaluation pipeline was built to compare fit quality, ranking behavior, and practical usefulness for reliability-aware systems."
        ],
        bullets: [
          "Scenario metadata ingestion and validation",
          "Feature engineering for motion and context signals",
          "Baseline models followed by boosting-based experiments",
          "Evaluation pipeline for reliability-oriented metrics"
        ]
      },
      {
        title: "Results / Insights",
        paragraphs: [
          "The strongest models showed that metadata alone can carry useful predictive signal about reliability. Even before touching downstream perception logic, this creates a path to prioritizing caution, fallback logic, or additional checks when confidence should be lower.",
          "The project highlighted how reliability modeling can make computer vision systems more operationally credible, especially when failure modes are expensive."
        ]
      },
      {
        title: "Future Improvements",
        paragraphs: [
          "Next steps would include integrating image-derived features, calibration analysis, and tighter downstream coupling so reliability predictions directly influence runtime behavior in a larger vision stack."
        ]
      }
    ]
  },
  {
    slug: "premier-league-championship-eda",
    title: "English Premier League & Championship - EDA & Insights",
    shortTitle: "Football EDA & Insights",
    summary:
      "Exploratory analysis of English football data, surfacing evidence-based insights about scoring patterns and home advantage.",
    tags: ["Data Analysis", "Sports Analytics"],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib/Seaborn", "Jupyter"],
    image: "/images/football-premier-league.jpg",
    imageAlt: "Placeholder banner for a football analytics project with a stadium scene.",
    heroEyebrow: "Sports analytics",
    overview:
      "An exploratory data project using football match data to uncover interpretable trends, compare league dynamics, and turn raw tables into decision-friendly insights.",
    sections: [
      {
        title: "Problem / Context",
        paragraphs: [
          "League tables tell only part of the story. This project focused on extracting deeper patterns around scoring, home advantage, and match behavior from English Premier League and Championship datasets.",
          "The goal was to move from raw seasonal data to explainable, chart-backed insights that could later support predictive or recommendation-style extensions."
        ]
      },
      {
        title: "Implementation Details",
        paragraphs: [
          "The work started with loading and standardizing match-level records, then cleaning categorical fields, handling date and team normalization, and creating engineered features for goal totals, match states, and venue effects.",
          "Visualization played a large role. Instead of chasing flashy dashboards, the emphasis was on charts that expose meaningful comparisons and make the underlying data preparation easy to trust."
        ],
        bullets: [
          "Data loading and normalization",
          "Cleaning and engineered features for goals and venue context",
          "Comparative charts across leagues and seasons",
          "Evidence-backed narrative around patterns and outliers"
        ]
      },
      {
        title: "Results / Insights",
        paragraphs: [
          "The analysis surfaced recurring signs of home advantage, differences in scoring distributions, and patterns that suggest how style and league structure affect match outcomes.",
          "The strongest outcome was not a single statistic, but a reusable EDA workflow that can support future forecasting or player/team performance modeling."
        ]
      },
      {
        title: "Future Improvements",
        paragraphs: [
          "A natural next step would be building predictive models for match outcomes, expected scoring ranges, or team form trajectories while preserving the interpretability established in the EDA stage."
        ]
      }
    ]
  },
  {
    slug: "e-hotels-reservation-platform",
    title: "e-Hotels Reservation Platform",
    shortTitle: "e-Hotels Platform",
    summary: "Multi-hotel reservation backend with robust schema design, triggers, and transactional workflows.",
    tags: ["Backend", "Databases"],
    tech: ["Postgres/MySQL", "Backend service layer", "SQL"],
    image: "/images/backend-hotels.jpg",
    imageAlt: "Placeholder banner for a hotel reservation backend project.",
    heroEyebrow: "Transactional backend systems",
    overview:
      "A reservation platform centered on backend workflows, relational design, and the database-level controls needed to keep bookings consistent and trustworthy.",
    sections: [
      {
        title: "Problem / Context",
        paragraphs: [
          "Reservation systems depend on clean data models and predictable transactional behavior. The project explored how to design a multi-hotel backend where booking logic, availability, and user permissions remain coherent under realistic usage.",
          "Instead of treating the database as passive storage, the system was designed so schema choices actively supported backend correctness."
        ]
      },
      {
        title: "Implementation Details",
        paragraphs: [
          "Core work focused on schema design, booking flows, role boundaries, and database mechanisms such as triggers and constraints. The service layer was shaped around clear reservation lifecycle steps so reads and writes stayed understandable.",
          "RBAC and transactional consistency were treated as first-class design concerns rather than secondary additions."
        ],
        bullets: [
          "Normalized schema design for hotels, rooms, users, and reservations",
          "Booking workflows with clear state transitions",
          "RBAC boundaries for administrative and customer actions",
          "Triggers and transaction handling to preserve consistency"
        ]
      },
      {
        title: "Results / Insights",
        paragraphs: [
          "The project reinforced how much backend quality depends on good database thinking. Strong schemas and carefully placed constraints reduced ambiguity and made service-layer logic easier to reason about.",
          "It also highlighted the value of designing for consistency early instead of patching correctness later."
        ]
      },
      {
        title: "Future Improvements",
        paragraphs: [
          "Potential extensions include inventory forecasting, caching strategies for frequent availability searches, and a more formal API layer for external clients."
        ]
      }
    ]
  },
  {
    slug: "movie-recommendation-system",
    title: "Movie Recommendation System",
    shortTitle: "Movie Recommender",
    summary: "Collaborative filtering movie recommender built on similarity metrics and modular backend components.",
    tags: ["Recommender Systems", "Data/ML"],
    tech: ["Python", "NumPy", "Pandas", "scikit-learn", "Optional Java/Go components"],
    image: "/images/movie-recommendation.jpg",
    imageAlt: "Placeholder banner for a movie recommendation engine project.",
    heroEyebrow: "Recommendations and data pipelines",
    overview:
      "A recommender system project focused on collaborative filtering, preprocessing discipline, and modular components that could evolve into a service-backed product.",
    sections: [
      {
        title: "Problem / Context",
        paragraphs: [
          "Recommendation systems need more than a single similarity formula. They depend on clean preprocessing, defensible feature choices, and ranking logic that remains understandable while datasets scale.",
          "This project explored collaborative filtering with a practical engineering mindset: build the model logic, but also shape the pipeline so it could become a maintainable backend capability."
        ]
      },
      {
        title: "Implementation Details",
        paragraphs: [
          "The system used structured preprocessing to normalize ratings data, construct reusable interaction representations, and compute similarity-based recommendations. Modular backend components made it easier to separate loading, scoring, and ranking concerns.",
          "Evaluation focused on how recommendation quality changed with different similarity assumptions and pipeline decisions."
        ],
        bullets: [
          "Preprocessing and normalization of ratings data",
          "Similarity metrics for collaborative filtering",
          "Recommendation ranking logic",
          "A path toward API deployment for serving recommendations"
        ]
      },
      {
        title: "Results / Insights",
        paragraphs: [
          "The project showed how recommendation quality is often limited more by data handling and representation choices than by the recommendation formula alone.",
          "It also strengthened the connection between data science experimentation and backend product thinking."
        ]
      },
      {
        title: "Future Improvements",
        paragraphs: [
          "Future versions could expose recommendation endpoints, add hybrid signals beyond collaborative filtering, and incorporate stronger evaluation or online feedback loops."
        ]
      }
    ]
  },
  {
    slug: "network-anomaly-detection",
    title: "Network Anomaly Detection (Security + ML)",
    shortTitle: "Network Anomaly Detection",
    summary: "Designing ML-based anomaly detection on network traffic features to flag suspicious flows and attacks.",
    tags: ["Security", "ML", "Networking"],
    tech: ["Traffic feature engineering", "Python", "ML models", "Network datasets"],
    image: "/images/cyber-anomaly.jpg",
    imageAlt: "Placeholder banner for a network anomaly detection project with cyber visuals.",
    heroEyebrow: "Security meets machine learning",
    status: "In Progress",
    overview:
      "An exploratory project combining networking, security analysis, and ML-based anomaly detection to identify suspicious traffic patterns and potentially malicious flows.",
    sections: [
      {
        title: "Problem / Context",
        paragraphs: [
          "Modern network environments generate patterns that are too large and dynamic to inspect manually. This project explores how engineered traffic features and ML methods can help surface anomalous behavior earlier.",
          "The work is still exploratory, with the emphasis currently on problem framing, dataset selection, and model direction."
        ]
      },
      {
        title: "Implementation Details",
        paragraphs: [
          "The initial design focuses on flow-level features such as packet counts, durations, byte distributions, protocol patterns, and timing behavior. The goal is to compare simple baselines with stronger models while keeping the feature pipeline explainable.",
          "Security usefulness matters as much as model score, so the evaluation plan is being shaped around practical detection tradeoffs rather than abstract metrics alone."
        ],
        bullets: [
          "Traffic feature engineering from network flows",
          "Model ideas for anomaly and attack detection",
          "Dataset selection and labeling strategy",
          "Planned evaluation for detection usefulness and false positives"
        ]
      },
      {
        title: "Results / Insights",
        paragraphs: [
          "The most important insight so far is architectural: the project will likely succeed or fail based on data quality, feature clarity, and realistic evaluation assumptions more than on model complexity."
        ]
      },
      {
        title: "Future Improvements",
        paragraphs: [
          "Planned next steps include finalizing datasets, benchmarking baseline models, and exploring how to integrate detections into a backend monitoring or alerting workflow."
        ]
      }
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projectItems.find((project) => project.slug === slug);
}
