import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  //Gets All Techs
  useEffect(() => {
    getTechs();
    //esling-disable-next-line
  }, [getTechs]);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4> Technicians </h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  //state.tech basically means all the outputs of the techReducer. Redux, in all, goes in this order: component actions initialize -> actions  which then go to the -> reducer  which then manipulates data given and pushes it to the -> main reducer or simply index.js (reducer version) where it all gets connected and then pushed to -> store.js which ultimately brings, by way of connect, the complied data (state.tech for example)
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
