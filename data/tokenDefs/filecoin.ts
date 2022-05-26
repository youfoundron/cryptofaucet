import { Faucet } from "../../domain/Faucet";
import { Token } from "../../domain/Token";

const faucetCalibrationFilecoin: Faucet = {
  networkId: 'filecoin-calibration',
  url: 'https://faucet.calibration.fildev.network/',
  maintainer: 'Protocol Labs',
  maintainerWebsite: 'https://protocol.ai/'
}

export const tokenFilecoin: Token = {
  title: 'Filecoin',
  logoPath: '/logos/filecoin-fil-logo.svg',
  symbol: 'FIL',
  faucets: [
    faucetCalibrationFilecoin
  ]
}
