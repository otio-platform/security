import { css } from '@microsoft/fast-element';
import { densityItemContainer } from '@adaptive-web/adaptive-ui/reference';

export const mfaCardStyles = css`
  :host { display: contents; }

  [part=card] {
    display: flex;
    flex-direction: column;
    padding:
      ${densityItemContainer.verticalPadding}
      ${densityItemContainer.horizontalPadding};
    gap: ${densityItemContainer.verticalGap};
  }

  [part=form] {
    display: flex;
    flex-direction: column;
    gap: ${densityItemContainer.verticalGap};
  }
`;