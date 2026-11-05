export const research = {
  title: 'Research',
  subtitle: 'Understanding subtle visual signals through intelligent systems.',
  mainProject: {
    name: 'STGW-AFL',
    fullName: 'Spatio-Temporal Geometric Weighted Apex Frame Localization',
    description: `A novel framework for micro-expression apex frame localization that combines learned facial landmark extraction with geometric and temporal feature engineering. The pipeline processes facial video sequences through multiple stages of spatial and temporal analysis to precisely identify the apex frame — the moment of maximum expression intensity.`,
    problem: 'Micro-expression apex frame localization',
    input: 'Facial video sequences',
    landmarks: 'MediaPipe Face Landmarker (468 3D landmarks)',
    coreRepresentations: [
      'Euclidean distance',
      'Manhattan distance',
      'Cosine distance',
    ],
    temporalSignals: [
      'Velocity (first-order temporal derivative)',
      'Acceleration (second-order temporal derivative)',
    ],
    framework: 'Spatio-temporal geometric weighting with learnable region and metric weights',
    pipeline: [
      {
        stage: 1,
        name: 'Video Input',
        description: 'Raw facial video sequences from micro-expression datasets',
      },
      {
        stage: 2,
        name: 'Facial Landmark Extraction',
        description: 'MediaPipe Face Landmarker extracts 468 3D facial landmarks per frame',
      },
      {
        stage: 3,
        name: 'Geometric Normalization',
        description: 'Landmarks normalized for scale, rotation, and translation invariance',
      },
      {
        stage: 4,
        name: 'Region-wise Motion Signals',
        description: 'Face partitioned into anatomical regions (eyes, eyebrows, mouth, etc.)',
      },
      {
        stage: 5,
        name: 'Distance Representations',
        description: 'Euclidean, Manhattan, and Cosine distances computed per region',
      },
      {
        stage: 6,
        name: 'Temporal Dynamics',
        description: 'Velocity and acceleration derived from distance time series',
      },
      {
        stage: 7,
        name: 'Learnable Weighting',
        description: 'Region weights, metric weights, and dynamic feature weights learned',
      },
      {
        stage: 8,
        name: 'Temporal Modeling',
        description: 'Gaussian temporal smoothing with temporal position prior',
      },
      {
        stage: 9,
        name: 'Apex Frame Prediction',
        description: 'Final prediction of apex frame index with confidence scoring',
      },
    ],
    methodologyNote: `This is a hybrid research pipeline: MediaPipe provides a learned facial landmark detector, while the geometric descriptors (distance metrics), temporal dynamics (velocity/acceleration), and weighting framework are engineered/mathematically defined representations with learnable weighting mechanisms. The entire system should not be labeled as purely "deep learning" nor purely "handcrafted" — it combines learned landmark extraction with geometric and temporal feature engineering and learnable weighting.`,
  },
  datasets: [
    { name: 'MMEW', used: true, description: 'Micro-expression dataset with high-resolution videos' },
    { name: 'CASME II', used: true, description: 'Spontaneous micro-expression database' },
    { name: 'CASME Square / CAS(ME)²', used: true, description: 'Enhanced CASME dataset with squared resolution' },
    { name: 'CASME III', used: false, description: 'Latest iteration with improved annotations (considered)' },
    { name: 'SMIC', used: false, description: 'Spontaneous Micro-expression Image Corpus (considered)' },
    { name: 'SAMM', used: false, description: 'Spontaneous Actions and Micro-Movements (considered)' },
    { name: 'CK+', used: false, description: 'Extended Cohn-Kanade dataset (macro-expressions, considered)' },
  ],
  results: [
    {
      train: 'MMEW',
      test: 'MMEW',
      mfe: 3.71,
      note: 'Within-dataset evaluation',
    },
    {
      train: 'MMEW',
      test: 'CASME II',
      mfe: 10.71,
      note: 'Cross-dataset generalization',
    },
    {
      train: 'CASME II',
      test: 'CASME II',
      mfe: 7.81,
      note: 'Within-dataset evaluation',
    },
    {
      train: 'MMEW',
      test: 'CASME Square',
      mfe: 1.26,
      note: 'Cross-dataset with enhanced resolution',
    },
  ],
  disclaimer: 'Results depend on dataset characteristics and evaluation protocol. Mean Frame Error (MFE) measures the average frame distance between predicted and ground-truth apex frames. Lower is better.',
}