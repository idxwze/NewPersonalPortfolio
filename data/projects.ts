import type { ProjectItem } from "@/data/types";

export const projectItems: ProjectItem[] = [
  {
    slug: "honours-research-optical-flow-reliability-prediction",
    title: "Predicting Optical Flow Reliability from Motion Scenario Metadata",
    shortTitle: "Metadata-Based Optical Flow Reliability Predictor",
    summary:
      "Predicted optical-flow reliability from scenario metadata using Farneback and RAFT error labels, then surfaced the results through plots, exported media, and a Streamlit explorer.",
    tags: ["Applied ML", "Computer Vision", "Research"],
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "scikit-learn", "Streamlit"],
    image: "/images/optical-flow-reliability-cover.png",
    imageAlt: "Three-panel optical flow project cover showing a scene preview, flow visualization, and RAFT EPE heatmap.",
    heroEyebrow: "CSI4900 course project",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This CSI4900 project explores whether optical-flow reliability can be predicted from metadata alone rather than image pixels.",
          "The goal was to forecast expected flow error before a heavy estimator is trusted or run across every scene at deployment time."
        ]
      },
      {
        title: "Pipeline",
        paragraphs: [
          "Implemented or integrated TFRecord ingestion, video and quantized ground-truth flow decoding, metadata feature extraction, and tabular dataset generation for three targets: reliability_score, epe_mean, and epe_mean_raft.",
          "The workflow reads scenario-organized records, engineers compact motion features, trains regression baselines, evaluates them with repeated scenario-holdout splits, then saves metrics, prediction files, plots, and media exports for a Streamlit inspection app."
        ],
        bullets: [
          "TFRecord scenarios → decode video and quantized ground-truth flow → extract motion metadata features → build CSV tables → generate reliability_score, epe_mean, and epe_mean_raft targets",
          "Linear Regression, Random Forest Regressor, and Gradient Boosting Regressor with random row splits, scenario-holdout, and 10-repeat scenario-holdout evaluation",
          "Saved artifact pipeline for metrics, predictions, plots, preview GIFs, RAFT flow visualizations, EPE heatmaps, and record-level Streamlit inspection"
        ]
      },
      {
        title: "Results",
        paragraphs: [
          "Random Forest was the strongest repeated scenario-holdout baseline for estimator-specific error prediction, reaching R² = 0.7987 ± 0.1147 and Spearman = 0.8466 ± 0.0604 on Farneback EPE, and R² = 0.6935 ± 0.1057 with Spearman = 0.8505 ± 0.0599 on RAFT EPE.",
          "The project produced reusable outputs including combined CSV tables, metrics summaries, prediction CSVs, plots, sample-media exports, and an interactive Streamlit demo for record-level review."
        ]
      }
    ],
    highlights: [
      "Built an end-to-end optical-flow reliability pipeline from TFRecord ingestion to saved metrics, exported visual media, and an interactive Streamlit demo",
      "Compared metadata-based prediction across three targets, including estimator-specific Farneback and RAFT EPE labels derived from ground-truth optical flow",
      "Evaluated generalization with repeated scenario-holdout splits, where Random Forest reached R² = 0.7987 ± 0.1147 on Farneback EPE and R² = 0.6935 ± 0.1057 on RAFT EPE"
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/idxwze/optical-flow-reliability-metadata.git"
      },
      {
        label: "Report",
        href: "https://github.com/idxwze/optical-flow-reliability-metadata/blob/main/REPORT.md"
      },
      {
        label: "Results",
        href: "https://github.com/idxwze/optical-flow-reliability-metadata/blob/main/RESULTS.md"
      },
      {
        label: "Workflow",
        href: "https://github.com/idxwze/optical-flow-reliability-metadata/blob/main/WORKFLOW.md"
      },
      {
        label: "Roadmap",
        href: "https://github.com/idxwze/optical-flow-reliability-metadata/blob/main/ROADMAP.md"
      }
    ],
    supportingMedia: [
      {
        src: "/images/optical-flow-reliability-metrics.png",
        alt: "Metrics dashboard showing MAE, RMSE, R-squared, Spearman, and record-level prediction comparisons for the optical flow project.",
        label: "Metrics explorer"
      },
      {
        src: "/images/optical-flow-reliability-inspector.png",
        alt: "Three-panel Streamlit inspection view with a preview GIF, flow visualization, and RAFT EPE heatmap.",
        label: "Flow and heatmap inspector"
      },
      {
        src: "/images/optical-flow-reliability-preview.gif",
        alt: "Animated scenario preview GIF used in the optical flow reliability demo.",
        label: "Scenario preview GIF"
      }
    ]
  },
  {
    slug: "movie-recommender-system",
    title: "Movie Recommendation Analysis Using The Movies Dataset",
    shortTitle: "Movie Recommender System",
    summary:
      "Built and compared multiple recommendation approaches on The Movies Dataset, including content-based methods, clustering, and collaborative filtering with matrix factorization.",
    tags: ["Recommender Systems", "Machine Learning", "Data Analysis"],
    tech: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib", "KaggleHub"],
    image: "/images/movie-recommender-cover.png",
    imageAlt: "Premium recommendation-systems cover showing a user-item signal matrix, ranked movie recommendations, and evaluation metrics.",
    heroEyebrow: "CSI4142 Assignment 4",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This notebook-based project explores movie recommendation from several angles: metadata similarity, clustering of movie attributes, content-based recommendation, and collaborative filtering with matrix factorization.",
          "Using The Movies Dataset, the work moves from metadata exploration to user-rating-driven recommendation generation."
        ]
      },
      {
        title: "Methods",
        paragraphs: [
          "Cleaned movie metadata, extracted structured features, compared similarity measures across movie attributes, and ran KMeans and DBSCAN clustering on budget vs revenue and runtime vs popularity feature spaces.",
          "Built a content-based recommendation setup with combined metadata heuristics, then implemented collaborative filtering with matrix factorization trained by SGD on ratings_small.csv."
        ],
        bullets: [
          "movie metadata + ratings ingestion → cleaning and preprocessing → exploratory analysis → similarity experiments → clustering experiments → content-based recommendation → collaborative filtering with matrix factorization → holdout evaluation → Top-N user recommendations",
          "Used movies_metadata.csv, ratings_small.csv, and links_small.csv from The Movies Dataset",
          "Compared latent dimensions k = 10 and k = 30 using RMSE and MAE"
        ]
      },
      {
        title: "Results",
        paragraphs: [
          "The final collaborative filtering model used k = 10, which slightly outperformed k = 30, and achieved RMSE = 0.9090 and MAE = 0.6997 on a 10 percent Gold Standard holdout.",
          "The system generated personalized Top-10 recommendations for selected users, showing the difference between metadata-driven recommendation and user-rating-driven recommendation."
        ]
      }
    ],
    highlights: [
      "Built a multi-method recommendation project combining similarity analysis, clustering, content-based filtering, and collaborative filtering",
      "Implemented matrix factorization with SGD and evaluated it using a 10 percent Gold Standard holdout, achieving RMSE 0.9090 and MAE 0.6997 with k = 10",
      "Generated personalized Top-10 movie recommendations from real user ratings data and compared them against metadata-driven recommendation strategies"
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/idxwze/Movie-Recommendation-Analysis-Using-The-Movies-Dataset.git"
      }
    ],
    supportingMedia: [
      {
        src: "/images/movie-recommender-evaluation.png",
        alt: "Collaborative filtering evaluation comparing k equals 10 and k equals 30 with RMSE and MAE metrics.",
        label: "Matrix factorization evaluation"
      },
      {
        src: "/images/movie-recommender-top10.png",
        alt: "Top-10 personalized movie recommendations for a selected user ranked by predicted rating.",
        label: "Top-10 recommendation output"
      },
      {
        src: "/images/movie-recommender-clustering.png",
        alt: "KMeans clustering plot on budget and revenue features from The Movies Dataset.",
        label: "KMeans clustering"
      }
    ]
  },
  {
    slug: "pcsurmesure-role-based-mobile-ordering-system",
    title: "PCSurMesure: Role-Based Mobile Ordering System",
    shortTitle: "PCSurMesure",
    summary: "Multi-role Android ordering application with authentication, order lifecycle management, and API-driven backend workflows.",
    tags: ["Android", "Mobile", "Backend"],
    tech: ["Java", "Android Studio", "Supabase", "REST APIs"],
    image: "/images/backend-hotels.jpg",
    imageAlt: "Mobile ordering and backend systems visual for the PCSurMesure project.",
    heroEyebrow: "Mobile ordering system",
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Built as a multi-role Android application for customized PC order management.",
          "The project centered on role-aware workflows, backend integration, and maintainable mobile architecture."
        ]
      },
      {
        title: "Build",
        paragraphs: [
          "Implemented role-based authentication, order lifecycle management, and permission-controlled workflows for different user roles.",
          "Replaced SQLite with Supabase and integrated API-driven backend interactions to support a more connected application architecture."
        ],
        bullets: [
          "Java Android application built in Android Studio",
          "Supabase-backed persistence and REST API interaction",
          "MVC architecture for maintainability and scalability"
        ]
      },
      {
        title: "Takeaway",
        paragraphs: [
          "A clean mobile systems project tying authentication, backend communication, and maintainable application structure together."
        ]
      }
    ]
  }
];
