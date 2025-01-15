import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../../shared/ui/index';
import { SelectionControls } from '../../../widgets';
import { usecomparePage } from '../../../shared/hooks/useComparePage';
import { SingleStudentComparisonWidget } from '../../../widgets/SingleStudentComparisonWidget';

export const ComparePage: React.FC = () => {
  const {
    allSubjects,
    tempSelectedSubjects,
    setTempSelectedSubjects,
    gradesData,
    gradesForTwo,
    tempDateRange,
    setTempDateRange,
    handleShowData,
    isLoading,
    elements,
    setSelectedStudents,
  } = usecomparePage();

  const navigate = useNavigate();

  const handleDateRangeChange = (date: Date | [Date, Date] | null) => {
    if (Array.isArray(date) && date.length === 2) {
      setTempDateRange(date);
    }
  };

  return (
    <div>
      <BackButton onClick={() => navigate(-1)} disabled={false}> Вернуться назад </BackButton>

      <SelectionControls 
        showTwoStudentsSelectButton={true} 
        elements={elements}
        allSubjects={allSubjects}
        selectedSubjects={tempSelectedSubjects} 
        onSubjectChange={setTempSelectedSubjects}
        dateRange={tempDateRange}
        onDateRangeChange={handleDateRangeChange}
        onShowTable={handleShowData}
        gradesData={gradesData} 
        gradesForTwo={gradesForTwo}
        isLoading={isLoading}
        onStudentsChange={setSelectedStudents}
      />

      <SingleStudentComparisonWidget 
        students={elements}
        subjects={allSubjects}
      />
    </div>
  );
};