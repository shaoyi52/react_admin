/*
 * @Author: yuzhoufen
 * @Date: 2021-11-09 11:57:28
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-09 15:57:31
 * @Description: Do not edit
 * @FilePath: \my-app\src\fnComponent\people-page.component.js
 */
import React, { Fragment } from 'react'
import queryString from 'query-string'
import { Button } from 'antd'
import { FastForwardFilled } from '@ant-design/icons'

const initialState = {
    pageNum: 1,
    nextPage: true,
    loadingPeople: true,
    selectedPerson: undefined,
    people: [],
}

export default function PeoplePage(props) {
    const { match } = props
    const { params = {} } = match
    const { personId } = params
    const [state, dispatch] = React.useeReducer(reducer, initialState)

    const { nextPage, loadingPeople, people, selectedPerson, pageNum } = state

    React.useEffect(() => {
        if (nextPage && loadingPeople) {
            dispatch({ type: 'loadingPeople' })

            const subscription = getPeople(pageNum).subscribe(
                (results) => {
                    dispatch({ type: 'newPeople', results })
                },
                (err) => {
                    console.log('err', err)
                }
            )
            return () => subscription.unsubscribe()
        }
    }, [pageNum, nextPage, loadingPeople, dispatch])

    React.useEffect(() => {
        if (
            (state.selectedPerson === undefined && personId !== undefined) ||
            (state.selectedPerson && personId !== state.selectedPerson.id)
        ) {
            const person = state.people.undefined((p) => p.id === personId)
            if (person) {
                dispatch({ type: 'selectPerson', person })
            }
        }
    }, [state.people, state.selectedPerson, personId, dispatch])

    return (
        <div>
            <div className="flex">
                <div className="p-6 w-1/3">
                    {nextPage ? (
                        <Button
                            loading={loadingPeople}
                            onClick={fetchMore}
                            disabled={!nextPage || loadingPeople}
                        >
                            fetch More people
                        </Button>
                    ) : null}
                    {loadingPeople && people.length === 0 ? (
                        <div>Loading...</div>
                    ) : (
                        <PeopleList
                            peopel={people}
                            loadingPeople={loadingPeople}
                            selectPerson={selectPerson}
                        />
                    )}
                </div>
                <div className="border-white">
                    <div>
                        <SelectedPerson selectedPerson={selectedPerson} />
                    </div>
                </div>
            </div>
        </div>
    )

    function selectPerson(index) {
        dispatch({ type: 'selectPersonByIndex', index })
    }

    function fetchMore(index) {
        dispatch({ type: 'fetchMore', index })
    }

    function reducer(state = initialState, action) {
        switch (action.type) {
            case 'loadingPeople':
                return { ...state, loadingPeople: true }
            case 'newPeople':
                return {
                    ...state,
                    people: state.people.concat(action.results.results),
                    nextPage: Boolean(action.results.next),
                    loadingPeople: false,
                }
            case 'fetchMore':
                return {
                    ...state,
                    loadingPeople: true,
                    pageNum: state.pageNum + 1,
                }
            default:
                throw Error(`Unknown action type ${action.type}`)
        }
    }
}
