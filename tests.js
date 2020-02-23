let menu = [
  {
    name: 'teste',
    context: 'asdasd',
    submenu: [
      {
        name: 'tes12******3te',
        context: 'asd123asd'
      },
      {
        name: 't1111111este',
        context: 'asdas111111d'
      }
    ]
  
  },
  {
    name: 'tes12345555te',
      context: 'asdasd',
      submenu: [
        {
          name: 'tes123te########',
          context: 'asd123asd'
        },
        {
          name: 't1111111este',
          context: 'asdas111111d'
        }
      ]
  },
  {
    name: 'te123123ste',
      context: 'asdasd',
      submenu: [
        {
          name: 'tes123te%%%%%%%%%',
          context: 'asd123asd'
        },
        {
          name: 't1111111este',
          context: 'asdas111111d'
        }
      ]
  }
] 




menu.filter( item => {
  // console.log(item)
  item.submenu.filter( itemSub => {
    // console.log(itemSub)
  })
})


const numbers = [1,2,3,4,5]
const doubled = numbers.map( number => number * 2)

console.log(`\n\nantigo array: ${numbers} \nnovo array: ${doubled}\n`)

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const scale = 'c'

console.log('scale -> ', scaleNames[scale])



<Paper elevation={2}>
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  spacing={2}
>
  <Grid item className={styles.containerImg} sm={3}>
    <img
      alt=""
      src={`${URL_BUCKET_BASE}/images/residencial/ilustracoes/${identifier}.png`}
      className={styles.image}
      aria-hidden
    />
  </Grid>
  <Grid
    item
    container
    className={styles.containerInfos}
    direction="column"
    ustify="center"
    alignItems="flex-start"
    sm={9}
  >
    <Grid
      item
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item className={styles.containerTitle} sm={8}>
        <p>
          {title}
          <span style={{ color: palette.disabledColor }}>
            {required && ' (obrigatório)'}
          </span>
        </p>
      </Grid>
      <Grid item className={styles.containerCheckBox} sm={4}>
        <Checkbox
          key={index}
          className={styles.checkBoxOVer}
          checkboxAriaLabel={title}
          disabled={required}
          checked={required || checked}
          ariaLabel={title}
          onClick={handleChecked}
        />
      </Grid>
    </Grid>
    <Grid item className={styles.rootExpansion}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={toggleHandler}
        >
          {toggle ? (
            <Typography className={styles.heading}>
              ocultar detalhes
            </Typography>
          ) : (
            <Typography className={styles.heading}>
              ver detalhes
            </Typography>
          )}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            você estará coberto em caso de roubo ou furto da sua residência.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
    <Grid
      item
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        sm={6}
      >
        <p>Valor da cobertura em caso de sinistro:</p>
        <p className={styles.sinisterPrice}>
          {formatToBRLCurrency(sinisterPrice)}
        </p>
      </Grid>
      <Grid item sm={6}>
        <span className={styles.price}>
          +{formatToBRLCurrency(price)}/parcela
        </span>
      </Grid>
    </Grid>
  </Grid>
</Grid>
</Paper>
);