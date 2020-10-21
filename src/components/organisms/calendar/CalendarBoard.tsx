import React, { FC, useState } from 'react'
import styled from 'styled-components'
import CalendarContext from '@/contexts/calendar'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import isSameMonth from 'date-fns/isSameMonth'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import format from 'date-fns/format'
import getDate from 'date-fns/getDate'
import getDay from 'date-fns/getDay'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import endOfWeek from 'date-fns/endOfWeek'
import eachWeekOfInterval from 'date-fns/eachWeekOfInterval'
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'

const CalendarBoard: FC = () => {
  const { calendar } = CalendarContext()
  const [targetDate, setTargetDate] = useState(new Date(calendar.date))
  const classes = useStyles()

  const showCalendar = getCalendarArray(targetDate)
  return (
    <div>
      <CssBaseline>
        <Paper className={classes.paper}>
          <Grid container justify="space-between">
            <Grid item>
              <Button
                variant="outlined"
                onClick={() =>
                  setTargetDate((current) => subMonths(current, 1))
                }
              >
                前の月
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={() => setTargetDate(new Date())}
              >
                今月
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={() =>
                  setTargetDate((current) => addMonths(current, 1))
                }
              >
                次の月
              </Button>
            </Grid>
          </Grid>

          <Typography variant="h4" align="center" className={classes.yearmonth}>
            {format(targetDate, 'y年M月')}
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" classes={{ head: classes.tableHead }}>
                  日
                </TableCell>
                <TableCell align="center" classes={{ head: classes.tableHead }}>
                  月
                </TableCell>
                <TableCell align="center" classes={{ head: classes.tableHead }}>
                  火
                </TableCell>
                <TableCell align="center" classes={{ head: classes.tableHead }}>
                  水
                </TableCell>
                <TableCell align="center" classes={{ head: classes.tableHead }}>
                  木
                </TableCell>
                <TableCell align="center" classes={{ head: classes.tableHead }}>
                  金
                </TableCell>
                <TableCell align="center" classes={{ head: classes.tableHead }}>
                  土
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {showCalendar.map((weekRow, rowNum) => (
                <TableRow key={rowNum}>
                  {weekRow.map((date) => (
                    <TableCell key={getDay(date)} align="center">
                      {getDate(date)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </CssBaseline>
    </div>
  )
}

/**
 * カレンダー表示配列
 * @param date
 */
const getCalendarArray = (date: Date) => {
  const sundays = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  })
  return sundays.map((sunday) =>
    eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) })
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(5, 10),
    padding: theme.spacing(5, 5),
  },
  yearmonth: {
    margin: theme.spacing(2, 0, 1, 0),
  },
  tableHead: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.light,
  },
}))

export default CalendarBoard
