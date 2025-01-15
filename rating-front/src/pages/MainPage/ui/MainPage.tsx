import { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchStudents, fetchGroups } from '../../../store/slices/mainPageSlice'
import { RootState, AppDispatch } from '../../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { GroupSelectButton } from '../../../features/ChoiceGroup/index'
import { StudentSelectButton } from '../../../features/ChoiceStudent/index'
import { LoadingIndicator } from '../../../shared/ui'
import './MainPage.css'

export const MainPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const students = useSelector((state: RootState) => state.mainPage.students);
  const groups = useSelector((state: RootState) => state.mainPage.groups);
  const status = useSelector((state: RootState) => state.mainPage.status);
  const error = useSelector((state: RootState) => state.mainPage.error);

  useEffect(() => {
    if (status == 'idle') {
      dispatch(fetchStudents());
      dispatch(fetchGroups());
    }
  }, [dispatch, status]);

  const handleStudentSelect = (id: string) => {
    navigate(`/extra/${id}`)
  }

  const handleCompareSelect = () => {
    navigate(`/compare`)
  }

  const handleGroupSelect = (name: string, id: number) => {
    navigate(`/extra-no-table/${name}/${id}`)
  }

  if (status === 'loading') {
    return <LoadingIndicator text="Загрузка страницы..." />;
  }

  if (error) {
    return <p>Error: {error}</p>;
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