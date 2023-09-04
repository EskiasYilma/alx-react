import React from 'react';
import PropTypes from 'prop-types';

const headerInline = {
  backgroundColor: '#deb5b545',
};

const normalInline = {
  backgroundColor: '#f5f5f5ab',
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr style={normalInline}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headerInline} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th style={headerInline}>{textFirstCell}</th>
            <th style={headerInline}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};


CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
