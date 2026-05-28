---
type: project
aliases:
  - L_EXEC
  - Execution-Aware Loss for Limit Order Book Prediction
tags:
  - project
  - selected-project
  - quantitative-finance
  - market-microstructure
  - pytorch
technologies:
  - PyTorch
  - DeepLOB
  - NumPy
  - Statistical Finance
  - FI-2010 Benchmark
repository: "https://github.com/prathameshfuke/quantres"
---

# L-EXEC

Execution-aware loss for limit order book prediction, designed by [[Prathamesh Fuke]]. Also referenced as L_EXEC.

## Stack

PyTorch, DeepLOB, NumPy, statistical finance, FI-2010 Benchmark.

## Highlights

- Designed a novel execution-aware deep learning loss function for limit order book prediction that optimizes trading profitability instead of raw classification accuracy.
- Introduced a composite loss combining a learnable asymmetric cost matrix, execution probability estimator, queue-depth latency discount, and auxiliary supervision modules.
- Built a complete 6-module quantitative research pipeline covering feature engineering, execution simulation, ablation studies, statistical validation, and regime robustness analysis.
- Achieved +1.8% PnL improvement.
- Achieved +0.5 Sharpe ratio improvement.
- Achieved statistical significance of p < 0.001 over DeepLOB plus CrossEntropy baselines.
- Validated results across high, normal, and low volatility market regimes using Diebold-Mariano statistical testing.

## Key Stats

- Approximately 343,000 market events processed
- 50 training epochs
- 6 pipeline modules
- 5 baseline models compared
- 4 ablation variants evaluated

## Links

- GitHub: [quantres](https://github.com/prathameshfuke/quantres)
- [[External Links]]

## Related

- [[Selected Projects]]
- [[Quantitative ML Systems]]
- [[Quantitative Finance and Markets]]
- [[AI System Design]]
