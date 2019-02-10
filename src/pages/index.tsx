import { updateAnnouncement } from "@core/states/actions";
import Button from "@material-ui/core/Button";
import React from "react";
import { connect } from "react-redux";
import {bindActionCreators, compose} from "redux";

interface IProps {
  announcementMessage: string;
  updateAnnouncementData: any;
}
interface IState {}

class IndexPage extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }
  public render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          你好，世界
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  announcementMessage: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateAnnouncementData: bindActionCreators(updateAnnouncement, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(IndexPage);
