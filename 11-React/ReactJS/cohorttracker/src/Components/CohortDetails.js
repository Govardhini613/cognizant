import styles from "./CohortDetails.module.css";

function CohortDetails({cohort}){

    return(

        <div className={styles.box}>

            <h3
                style={{
                    color:
                        cohort.currentStatus==="Ongoing"
                        ? "green"
                        : "blue"
                }}
            >
                {cohort.code}
            </h3>

            <dl>

                <dt>Technology</dt>
                <dd>{cohort.technology}</dd>

                <dt>Trainer</dt>
                <dd>{cohort.trainer}</dd>

                <dt>Start Date</dt>
                <dd>{cohort.startDate}</dd>

                <dt>Status</dt>
                <dd>{cohort.currentStatus}</dd>

            </dl>

        </div>

    );

}

export default CohortDetails;