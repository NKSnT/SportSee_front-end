import React from 'react';
import {
    RadialBarChart,
    RadialBar,
    /* Legend, */ ResponsiveContainer,
    PolarAngleAxis
} from 'recharts';

const CustomLabel = (props) => {
    return (
        <svg
            width="266"
            height="271"
            viewBox="0 0 266 271"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* cercle blanc */}
            <path
                d="M91.3446 61.5144C50.8384 84.9007 36.96 136.696 60.3462 177.202C83.7324 217.708 135.527 231.586 176.034 208.2C216.54 184.814 230.418 133.019 207.032 92.5128C183.646 52.0066 131.851 38.1282 91.3446 61.5144Z"
                fill="white"
                stroke="url(#paint0_angular_2_154)"
                strokeWidth="10"
            />
            {/* 12 */}
            <text
                x="45%"
                y="45%"
                /*  x={props.viewBox.x}
                y={props.viewBox.y} */
                fill="#282D30"
                dy={0}
                dx={-5}
                fontSize={26}
                fontWeight={700}>
                {`${props.value}%`}
            </text>
            {/* de votre objectif */}
            <path
                d="M106.164 152.879C106.164 151.577 106.466 150.533 107.07 149.746C107.674 148.955 108.484 148.559 109.5 148.559C110.396 148.559 111.12 148.871 111.672 149.496V145.168H113.57V157.168H111.852L111.758 156.293C111.19 156.981 110.432 157.324 109.484 157.324C108.495 157.324 107.693 156.926 107.078 156.129C106.469 155.332 106.164 154.249 106.164 152.879ZM108.062 153.043C108.062 153.903 108.227 154.574 108.555 155.059C108.888 155.538 109.359 155.778 109.969 155.778C110.745 155.778 111.312 155.431 111.672 154.739V151.129C111.323 150.452 110.76 150.114 109.984 150.114C109.37 150.114 108.896 150.358 108.562 150.848C108.229 151.332 108.062 152.064 108.062 153.043ZM119.273 157.324C118.07 157.324 117.094 156.947 116.344 156.192C115.599 155.431 115.227 154.421 115.227 153.16V152.926C115.227 152.082 115.388 151.33 115.711 150.668C116.039 150.002 116.497 149.483 117.086 149.114C117.674 148.744 118.331 148.559 119.055 148.559C120.206 148.559 121.094 148.926 121.719 149.66C122.349 150.395 122.664 151.434 122.664 152.778V153.543H117.141C117.198 154.241 117.43 154.793 117.836 155.199C118.247 155.606 118.763 155.809 119.383 155.809C120.253 155.809 120.961 155.457 121.508 154.754L122.531 155.731C122.193 156.236 121.74 156.629 121.172 156.91C120.609 157.186 119.977 157.324 119.273 157.324ZM119.047 150.082C118.526 150.082 118.104 150.265 117.781 150.629C117.464 150.994 117.26 151.502 117.172 152.153H120.789V152.012C120.747 151.377 120.578 150.897 120.281 150.574C119.984 150.246 119.573 150.082 119.047 150.082ZM131.109 154.762L132.898 148.715H134.859L131.93 157.168H130.281L127.328 148.715H129.297L131.109 154.762ZM135.57 152.864C135.57 152.035 135.734 151.291 136.062 150.629C136.391 149.962 136.852 149.452 137.445 149.098C138.039 148.739 138.721 148.559 139.492 148.559C140.633 148.559 141.557 148.926 142.266 149.66C142.979 150.395 143.365 151.369 143.422 152.582L143.43 153.028C143.43 153.861 143.268 154.606 142.945 155.262C142.628 155.918 142.169 156.426 141.57 156.785C140.977 157.145 140.289 157.324 139.508 157.324C138.315 157.324 137.359 156.929 136.641 156.137C135.927 155.34 135.57 154.28 135.57 152.957V152.864ZM137.469 153.028C137.469 153.897 137.648 154.58 138.008 155.074C138.367 155.564 138.867 155.809 139.508 155.809C140.148 155.809 140.646 155.559 141 155.059C141.359 154.559 141.539 153.827 141.539 152.864C141.539 152.009 141.354 151.332 140.984 150.832C140.62 150.332 140.122 150.082 139.492 150.082C138.872 150.082 138.38 150.33 138.016 150.824C137.651 151.314 137.469 152.048 137.469 153.028ZM147.414 146.66V148.715H148.906V150.121H147.414V154.84C147.414 155.163 147.477 155.397 147.602 155.543C147.732 155.684 147.961 155.754 148.289 155.754C148.508 155.754 148.729 155.728 148.953 155.676V157.145C148.521 157.265 148.104 157.324 147.703 157.324C146.245 157.324 145.516 156.52 145.516 154.91V150.121H144.125V148.715H145.516V146.66H147.414ZM154.789 150.449C154.539 150.408 154.281 150.387 154.016 150.387C153.146 150.387 152.56 150.72 152.258 151.387V157.168H150.359V148.715H152.172L152.219 149.66C152.677 148.926 153.312 148.559 154.125 148.559C154.396 148.559 154.62 148.595 154.797 148.668L154.789 150.449ZM159.555 157.324C158.352 157.324 157.375 156.947 156.625 156.192C155.88 155.431 155.508 154.421 155.508 153.16V152.926C155.508 152.082 155.669 151.33 155.992 150.668C156.32 150.002 156.779 149.483 157.367 149.114C157.956 148.744 158.612 148.559 159.336 148.559C160.487 148.559 161.375 148.926 162 149.66C162.63 150.395 162.945 151.434 162.945 152.778V153.543H157.422C157.479 154.241 157.711 154.793 158.117 155.199C158.529 155.606 159.044 155.809 159.664 155.809C160.534 155.809 161.242 155.457 161.789 154.754L162.812 155.731C162.474 156.236 162.021 156.629 161.453 156.91C160.891 157.186 160.258 157.324 159.555 157.324ZM159.328 150.082C158.807 150.082 158.385 150.265 158.062 150.629C157.745 150.994 157.542 151.502 157.453 152.153H161.07V152.012C161.029 151.377 160.859 150.897 160.562 150.574C160.266 150.246 159.854 150.082 159.328 150.082ZM108.016 178.864C108.016 178.035 108.18 177.291 108.508 176.629C108.836 175.962 109.297 175.452 109.891 175.098C110.484 174.739 111.167 174.559 111.938 174.559C113.078 174.559 114.003 174.926 114.711 175.66C115.424 176.395 115.81 177.369 115.867 178.582L115.875 179.028C115.875 179.861 115.714 180.606 115.391 181.262C115.073 181.918 114.615 182.426 114.016 182.785C113.422 183.145 112.734 183.324 111.953 183.324C110.76 183.324 109.805 182.929 109.086 182.137C108.372 181.34 108.016 180.28 108.016 178.957V178.864ZM109.914 179.028C109.914 179.897 110.094 180.58 110.453 181.074C110.812 181.564 111.312 181.809 111.953 181.809C112.594 181.809 113.091 181.559 113.445 181.059C113.805 180.559 113.984 179.827 113.984 178.864C113.984 178.009 113.799 177.332 113.43 176.832C113.065 176.332 112.568 176.082 111.938 176.082C111.318 176.082 110.826 176.33 110.461 176.824C110.096 177.314 109.914 178.048 109.914 179.028ZM124.898 179.028C124.898 180.34 124.604 181.384 124.016 182.16C123.432 182.936 122.628 183.324 121.602 183.324C120.612 183.324 119.841 182.968 119.289 182.254L119.195 183.168H117.477V171.168H119.375V175.528C119.922 174.882 120.659 174.559 121.586 174.559C122.617 174.559 123.427 174.942 124.016 175.707C124.604 176.473 124.898 177.543 124.898 178.918V179.028ZM123 178.864C123 177.947 122.839 177.259 122.516 176.801C122.193 176.343 121.724 176.114 121.109 176.114C120.286 176.114 119.708 176.473 119.375 177.192V180.676C119.714 181.41 120.297 181.778 121.125 181.778C121.719 181.778 122.177 181.556 122.5 181.114C122.823 180.671 122.99 180.002 123 179.106V178.864ZM128.477 174.715V183.918C128.477 184.783 128.26 185.442 127.828 185.895C127.401 186.353 126.773 186.582 125.945 186.582C125.596 186.582 125.26 186.538 124.938 186.449V184.949C125.135 184.996 125.359 185.02 125.609 185.02C126.24 185.02 126.562 184.676 126.578 183.989V174.715H128.477ZM126.414 172.52C126.414 172.228 126.505 171.986 126.688 171.793C126.875 171.601 127.141 171.504 127.484 171.504C127.828 171.504 128.094 171.601 128.281 171.793C128.469 171.986 128.562 172.228 128.562 172.52C128.562 172.806 128.469 173.046 128.281 173.239C128.094 173.426 127.828 173.52 127.484 173.52C127.141 173.52 126.875 173.426 126.688 173.239C126.505 173.046 126.414 172.806 126.414 172.52ZM134.234 183.324C133.031 183.324 132.055 182.947 131.305 182.192C130.56 181.431 130.188 180.421 130.188 179.16V178.926C130.188 178.082 130.349 177.33 130.672 176.668C131 176.002 131.458 175.483 132.047 175.114C132.635 174.744 133.292 174.559 134.016 174.559C135.167 174.559 136.055 174.926 136.68 175.66C137.31 176.395 137.625 177.434 137.625 178.778V179.543H132.102C132.159 180.241 132.391 180.793 132.797 181.199C133.208 181.606 133.724 181.809 134.344 181.809C135.214 181.809 135.922 181.457 136.469 180.754L137.492 181.731C137.154 182.236 136.701 182.629 136.133 182.91C135.57 183.186 134.938 183.324 134.234 183.324ZM134.008 176.082C133.487 176.082 133.065 176.265 132.742 176.629C132.424 176.994 132.221 177.502 132.133 178.153H135.75V178.012C135.708 177.377 135.539 176.897 135.242 176.574C134.945 176.246 134.534 176.082 134.008 176.082ZM142.578 181.809C143.052 181.809 143.445 181.671 143.758 181.395C144.07 181.119 144.237 180.778 144.258 180.371H146.047C146.026 180.897 145.862 181.39 145.555 181.848C145.247 182.301 144.831 182.66 144.305 182.926C143.779 183.192 143.211 183.324 142.602 183.324C141.419 183.324 140.482 182.942 139.789 182.176C139.096 181.41 138.75 180.353 138.75 179.004V178.809C138.75 177.522 139.094 176.494 139.781 175.723C140.469 174.947 141.406 174.559 142.594 174.559C143.599 174.559 144.417 174.853 145.047 175.442C145.682 176.025 146.016 176.793 146.047 177.746H144.258C144.237 177.262 144.07 176.864 143.758 176.551C143.451 176.239 143.057 176.082 142.578 176.082C141.964 176.082 141.49 176.306 141.156 176.754C140.823 177.197 140.654 177.871 140.648 178.778V179.082C140.648 179.999 140.812 180.684 141.141 181.137C141.474 181.585 141.953 181.809 142.578 181.809ZM149.859 172.66V174.715H151.352V176.121H149.859V180.84C149.859 181.163 149.922 181.397 150.047 181.543C150.177 181.684 150.406 181.754 150.734 181.754C150.953 181.754 151.174 181.728 151.398 181.676V183.145C150.966 183.265 150.549 183.324 150.148 183.324C148.69 183.324 147.961 182.52 147.961 180.91V176.121H146.57V174.715H147.961V172.66H149.859ZM154.828 183.168H152.93V174.715H154.828V183.168ZM152.812 172.52C152.812 172.228 152.904 171.986 153.086 171.793C153.273 171.601 153.539 171.504 153.883 171.504C154.227 171.504 154.492 171.601 154.68 171.793C154.867 171.986 154.961 172.228 154.961 172.52C154.961 172.806 154.867 173.046 154.68 173.239C154.492 173.426 154.227 173.52 153.883 173.52C153.539 173.52 153.273 173.426 153.086 173.239C152.904 173.046 152.812 172.806 152.812 172.52ZM157.57 183.168V176.121H156.281V174.715H157.57V173.942C157.57 173.004 157.831 172.28 158.352 171.77C158.872 171.259 159.602 171.004 160.539 171.004C160.872 171.004 161.227 171.051 161.602 171.145L161.555 172.629C161.346 172.587 161.104 172.567 160.828 172.567C159.922 172.567 159.469 173.033 159.469 173.965V174.715H161.188V176.121H159.469V183.168H157.57Z"
                fill="#74798C"
            />
            {/* score */}
            <path
                d="M40.6577 40.2534C40.6577 39.7847 40.4917 39.4233 40.1597 39.1694C39.8325 38.9155 39.2393 38.6592 38.3799 38.4004C37.5205 38.1416 36.8369 37.8535 36.3291 37.5361C35.3574 36.9258 34.8716 36.1299 34.8716 35.1484C34.8716 34.2891 35.2207 33.5811 35.9189 33.0244C36.6221 32.4678 37.5327 32.1895 38.6509 32.1895C39.3931 32.1895 40.0547 32.3262 40.6357 32.5996C41.2168 32.873 41.6733 33.2637 42.0054 33.7715C42.3374 34.2744 42.5034 34.8335 42.5034 35.4487H40.6577C40.6577 34.8921 40.4819 34.4575 40.1304 34.145C39.7837 33.8276 39.2856 33.6689 38.6362 33.6689C38.0308 33.6689 37.5596 33.7983 37.2227 34.0571C36.8906 34.3159 36.7246 34.6772 36.7246 35.1411C36.7246 35.5317 36.9053 35.8589 37.2666 36.1226C37.6279 36.3813 38.2236 36.6353 39.0537 36.8843C39.8838 37.1284 40.5503 37.4092 41.0532 37.7266C41.5562 38.0391 41.9248 38.4004 42.1592 38.8105C42.3936 39.2158 42.5107 39.6919 42.5107 40.2388C42.5107 41.1274 42.1689 41.8354 41.4854 42.3628C40.8066 42.8853 39.8838 43.1465 38.7168 43.1465C37.9453 43.1465 37.2349 43.0049 36.5854 42.7217C35.9409 42.4336 35.438 42.0381 35.0767 41.5352C34.7202 41.0322 34.542 40.4463 34.542 39.7773H36.395C36.395 40.3828 36.5952 40.8516 36.9956 41.1836C37.396 41.5156 37.9697 41.6816 38.7168 41.6816C39.3613 41.6816 39.8447 41.5522 40.167 41.2935C40.4941 41.0298 40.6577 40.6831 40.6577 40.2534ZM47.2202 41.7256C47.6646 41.7256 48.0332 41.5962 48.3262 41.3374C48.6191 41.0786 48.7754 40.7588 48.7949 40.3779H50.4722C50.4526 40.8711 50.2988 41.3325 50.0107 41.7622C49.7227 42.187 49.332 42.5239 48.8389 42.7729C48.3457 43.022 47.8135 43.1465 47.2422 43.1465C46.1338 43.1465 45.2549 42.7876 44.6055 42.0698C43.9561 41.3521 43.6313 40.3608 43.6313 39.0962V38.9131C43.6313 37.707 43.9536 36.7427 44.5981 36.02C45.2427 35.2925 46.1216 34.9287 47.2349 34.9287C48.1772 34.9287 48.9438 35.2046 49.5347 35.7563C50.1304 36.3032 50.4429 37.0234 50.4722 37.917H48.7949C48.7754 37.4629 48.6191 37.0894 48.3262 36.7964C48.0381 36.5034 47.6694 36.3569 47.2202 36.3569C46.644 36.3569 46.1997 36.5669 45.8872 36.9868C45.5747 37.4019 45.416 38.0342 45.4111 38.8838V39.1694C45.4111 40.0288 45.5649 40.6709 45.8726 41.0957C46.1851 41.5156 46.6343 41.7256 47.2202 41.7256ZM51.4829 38.9644C51.4829 38.188 51.6367 37.4897 51.9443 36.8696C52.252 36.2446 52.6841 35.7661 53.2407 35.4341C53.7974 35.0972 54.437 34.9287 55.1597 34.9287C56.229 34.9287 57.0957 35.2729 57.7598 35.9614C58.4287 36.6499 58.79 37.563 58.8438 38.7007L58.8511 39.1182C58.8511 39.8994 58.6997 40.5977 58.397 41.2129C58.0991 41.8281 57.6694 42.3042 57.1079 42.6411C56.5513 42.978 55.9067 43.1465 55.1743 43.1465C54.0562 43.1465 53.1602 42.7754 52.4863 42.0332C51.8174 41.2861 51.4829 40.2925 51.4829 39.0522V38.9644ZM53.2627 39.1182C53.2627 39.9336 53.4312 40.5732 53.7681 41.0371C54.105 41.4961 54.5737 41.7256 55.1743 41.7256C55.7749 41.7256 56.2412 41.4912 56.5732 41.0225C56.9102 40.5537 57.0786 39.8677 57.0786 38.9644C57.0786 38.1636 56.9053 37.5288 56.5586 37.0601C56.2168 36.5913 55.7505 36.3569 55.1597 36.3569C54.5786 36.3569 54.1172 36.5889 53.7754 37.0527C53.4336 37.5117 53.2627 38.2002 53.2627 39.1182ZM64.5054 36.7012C64.271 36.6621 64.0293 36.6426 63.7803 36.6426C62.9648 36.6426 62.4155 36.9551 62.1323 37.5801V43H60.3525V35.0752H62.0518L62.0957 35.9614C62.5254 35.2729 63.1211 34.9287 63.8828 34.9287C64.1367 34.9287 64.3467 34.9629 64.5127 35.0312L64.5054 36.7012ZM68.9731 43.1465C67.8452 43.1465 66.9297 42.7925 66.2266 42.0845C65.5283 41.3716 65.1792 40.4243 65.1792 39.2427V39.0229C65.1792 38.2319 65.3306 37.5264 65.6333 36.9062C65.9409 36.2812 66.3706 35.7954 66.9224 35.4487C67.4741 35.1021 68.0894 34.9287 68.7681 34.9287C69.8472 34.9287 70.6797 35.2729 71.2656 35.9614C71.8564 36.6499 72.1519 37.624 72.1519 38.8838V39.6016H66.9736C67.0273 40.2559 67.2446 40.7734 67.6255 41.1543C68.0112 41.5352 68.4946 41.7256 69.0757 41.7256C69.8911 41.7256 70.5552 41.396 71.0679 40.7368L72.0273 41.6523C71.71 42.126 71.2852 42.4946 70.7529 42.7583C70.2256 43.0171 69.6323 43.1465 68.9731 43.1465ZM68.7607 36.3569C68.2725 36.3569 67.877 36.5278 67.5742 36.8696C67.2764 37.2114 67.0859 37.6875 67.0029 38.2979H70.394V38.166C70.355 37.5703 70.1963 37.1211 69.918 36.8184C69.6396 36.5107 69.2539 36.3569 68.7607 36.3569Z"
                fill="#20253A"
            />
        </svg>

        /*   <svg x="40%" y="36%">           
            <text
                x={props.viewBox.x}
                y={props.viewBox.y}
                fill="#282D30"
                dy={20}
                dx={5}
                fontSize={26}
                fontWeight={700}>
                {`${props.value}%`}
            </text>
            <text
                x={props.viewBox.x}
                y={props.viewBox.y}
                fill="#74798C"
                dy={45}
                dx={0}
                fontSize={16}
                fontWeight={500}>
                de votre
            </text>
            <text
                x={props.viewBox.x}
                y={props.viewBox.y}
                fill="#74798C"
                dy={70}
                dx={0}
                fontSize={16}
                fontWeight={500}>
                objectif
            </text>
        </svg> */
    );
};

export default function TodayScore_chart(props) {
    console.log(props.data);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="85"
                outerRadius="100"
                barSize={20}
                data={props.data}
                startAngle={180}
                endAngle={-180}>
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar
                    width={160}
                    /* minAngle={15} */
                    label={CustomLabel}
                    /*  background={{ fill: '#fbfbfb' }} */
                    fill="#FF0000"
                    dataKey={props.axis1}
                    cornerRadius={20 / 2}
                />
                {/*   <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                /> */}
            </RadialBarChart>
        </ResponsiveContainer>
    );
}
