import * as React from 'react';

// Other controls
import { PanelBody } from './PanelBody';

interface IPanelContainerProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
  /** Anchor element to base positioning of body on. */
  anchor: HTMLDivElement;
  /** Does panel have a fixed width? */
  width?: number;
  /** Does panel have internal padding? */
  padded?: boolean;  
  /** If set, panel does not perform animation. */
  noanimation?: boolean;
}

class PanelContainer extends React.Component<IPanelContainerProps> {
  private above = false; // Is body above parent?
  private right = false; // Is body right-aligned to parent?
  private offset = 20;   // Offset of body arrow, in pixels.

  constructor(props: IPanelContainerProps) {
    super(props);
    if(this.props.anchor) {
      const parent:HTMLElement = this.props.anchor.parentElement;
      const rect = parent.getBoundingClientRect();
      this.above = rect.top >= window.innerHeight / 2,
      this.right = rect.left < window.innerWidth / 2
      this.offset = Math.round(rect.width / 2);
    }
  }

  // After mounting, focus on the first <input> element in the panel,
  // if there is one.
  componentDidMount() {
    if(this.props.anchor) {
      const firstInput = this.props.anchor.parentElement.querySelector('input');
      if(firstInput != null) firstInput.focus();
    }
  }

  render() {
    let p = this.props;
    return (
      <PanelBody noanimation={this.props.noanimation} className={p.className} above={this.above} right={this.right} offset={this.offset} padded={p.padded} width={p.width}>{p.children}</PanelBody>
    );
  }
}

export { PanelContainer };
