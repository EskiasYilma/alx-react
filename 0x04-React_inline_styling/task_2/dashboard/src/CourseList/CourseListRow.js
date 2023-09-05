import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const appStyles = StyleSheet.create({
  headerInline: {
    backgroundColor: '#deb5b545',
  },

  normalInline: {
    backgroundColor: '#f5f5f5ab',
  },
});


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr className={css(appStyles['normalInline'])}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(appStyles['headerInline'])} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(appStyles['headerInline'])}>{textFirstCell}</th>
            <th className={css(appStyles['headerInline'])}>{textSecondCell}</th>
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
