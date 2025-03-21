import React from "react";
import {bindActionCreators} from "redux";
import {selectTab} from "./tabActions";
import {connect} from "react-redux";
import If from "../operator/if";

class TabHeader extends React.Component {
  render() {
    const selected = this.props.tab.selected === this.props.target
    const visible = this.props.tab.visible[this.props.target]
    return (
      <If test={visible}>
        <li className={selected ? "active" : ''}>
          <a
            data-toggle='tab'
            href="javascript:"
            data-target={this.props.target}
            onClick={() => this.props.selectTab(this.props.target)}
          >
            <i className={`fa fa-${this.props.icon}`}/>
            {this.props.label}
          </a>
        </li>
      </If>
    )
  }
}

const mapStateToProps = (state) => ({tab: state.tab})
const mapDispatchToProps = (dispatch) => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);