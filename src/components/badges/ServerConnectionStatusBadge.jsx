/**
 * @file Smart badge component that shows the authentication status of the
 * current server.
 */

import { connect } from 'react-redux';

import SidebarBadge from './SidebarBadge';

import Colors from '~/components/colors';
import { ConnectionState } from '~/model/connections';

const colorForState = {
  [ConnectionState.CONNECTED]: Colors.success,
  [ConnectionState.CONNECTING]: Colors.warning,
  [ConnectionState.DISCONNECTING]: Colors.warning,
  [ConnectionState.DISCONNECTED]: Colors.error
};

/**
 * Smart badge component that colors and shows itself according to the
 * status of all the connections reported by the server.
 */
export default connect(
  // mapStateToProps
  state => ({
    color: colorForState[state.servers.current.state],
    visible: state.dialogs.serverSettings.active
  }),
  // Return empty object from mapDispatchToProps to avoid invalid prop warning
  // caused by react-badger not handling the automatically added dispatch prop.
  () => ({})
)(SidebarBadge);