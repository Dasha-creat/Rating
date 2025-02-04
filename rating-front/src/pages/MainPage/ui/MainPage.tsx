import { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchStudents } from '../../../store/api/fetchStudents'
import { fetchGroups } from '../../../store/api/fetchGroups'
import { RootState, AppDispatch } from '../../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { GroupSelectButton } from '../../../features/ChoiceGroup/index'
import { StudentSelectButton } from '../../../features/ChoiceStudent/index'
import { LoadingIndicator } from '../../../shared/ui'
import './MainPage.css'

export const MainPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const students = useSelector((state: RootState) => state.students.students);
  const studentsStatus = useSelector((state: RootState) => state.students.status);
  const studentsError = useSelector((state: RootState) => state.students.error);

  const groups = useSelector((state: RootState) => state.groups.groups);
  const groupsStatus = useSelector((state: RootState) => state.groups.status);
  const groupsError = useSelector((state: RootState) => state.groups.error);

  useEffect(() => {
    if (studentsStatus === 'idle') {
      dispatch(fetchStudents());
    }
    if (groupsStatus === 'idle') {
      dispatch(fetchGroups());
    }
  }, [dispatch, studentsStatus, groupsStatus]);

  const handleStudentSelect = (id: string) => {
    navigate(`/extra/${id}`)
  }

  const handleCompareSelect = () => {
    navigate(`/compare`)
  }

  const handleGroupSelect = (name: string) => {
    navigate(`/extra-no-table/${name}`)
  }

  if (studentsStatus === 'loading' || groupsStatus === 'loading') {
    return <LoadingIndicator text="Загрузка страницы..." />;
  }

  if (studentsError || groupsError) {
    return <p>Error: {studentsError || groupsError}</p>;
  }

  return (
    <Fragment>
      <main className="bodymain">
        <div className="buttons">
          <StudentSelectButton 
            elements={students} 
            onSelect={handleStudentSelect}
            title={"Выбрать студента"}
          />
          <GroupSelectButton 
            elements={groups} 
            onSelect={handleGroupSelect} 
            title={"Выбрать группу"}
          />
          <button 
            onClick={handleCompareSelect}
            className='custom-button compare-button button'
          >
            Сравнить рейтинги
          </button>
        </div>
      </main>
    </Fragment>
  )
}