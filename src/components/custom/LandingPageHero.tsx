import React, { useState } from "react";
import {
    Badge,
    Box,
    Flex,
    Heading,
    HStack,
    Stack,
    Switch,
    Text,
    useBreakpointValue,
    useTheme,
} from "@chakra-ui/react";
import { getFlexDirection, HeroImageLocation } from "@/components/Hero";
import { RichText } from "@/components/RichText";
import { Asset } from "@/components/Asset";
import {
    Bar,
    BarChart,
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Sector,
} from "recharts";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const TranslucentBox = ({
    props,
    children,
}: {
    props: any;
    children: React.ReactNode;
}) => {
    return (
        <Box
            position="absolute"
            {...props}
            p="4"
            bgColor="rgba(255, 255, 255, 0.8)"
            backdropFilter="blur(3px)"
            borderRadius={"lg"}
            border={"1px solid"}
            borderColor={"gray.50"}
            boxShadow={"md"}
            // Additional styles...
        >
            {children}
        </Box>
    );
};

const StyledStack = styled(Stack)`
    g {
        outline: none;
    }
`;

const ActiveSegment = (props: any) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        animationEnded,
    } = props;
    const cxAdditional = animationEnded ? 4 : 0;
    const cyAdditional = animationEnded ? 5 : 0;
    const outerRadiusAdditional = animationEnded ? 2 : 0;
    return (
        <g>
            <Sector
                cx={cx + cxAdditional}
                cy={cy - cyAdditional}
                innerRadius={innerRadius}
                outerRadius={outerRadius + outerRadiusAdditional} // Increased outerRadius
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                style={{ outline: "none" }}
            />
        </g>
    );
};

// const Sparkle = (props: Sparkle) => {
//     const { distance, angle } = props;
//     // Adjust the distance based on angle for an oval shape (more elongated horizontally)
//     // const horizontalRatio = 1.7857; // Wider than it is tall
//     // const verticalRatio = 1.5;
//     // const x = distance * horizontalRatio * Math.cos(angle);
//     // const y = distance * verticalRatio * Math.sin(angle);
//
//     const xOffset = Math.cos(angle) * distance;
//     const yOffset = Math.sin(angle) * distance;
//     return (
//         <div
//             className="sparkle"
//             style={{
//                 // top: `calc(50% + ${y}px)`, // Center vertically and adjust by y
//                 // left: `calc(50% + ${x}px)`, // Center horizontally and adjust by x
//                 // transform: "translate(-50%, -50%)", // Ensure the sparkle is centered on its position
//                 // top: `50%`, // Start from the center vertically
//                 // left: `50%`, // Start from the center horizontally
//                 // transform: `translate(${xOffset}px, ${yOffset}px)`, // Move from center to around the switch
//                 top: "50%", // Start from the center vertically
//                 left: "50%", // Start from the center horizontally
//                 transform: `translate(${xOffset}px, ${yOffset}px)`, // Offset from center based on angle
//                 transformOrigin: "center", // Ensure transformations pivot around the center
//             }}
//         >
//             ✨
//         </div>
//     );
// };
//
// const SparkleBox = styled.div`
//     position: relative;
//     display: inline-block;
//     width: 50px;
//     height: 28px;
//     @keyframes sparkle {
//         0% {
//             transform: scale(0);
//             opacity: 1;
//         }
//         100% {
//             transform: scale(1);
//             opacity: 0.25;
//         }
//     }
//
//     .sparkle {
//         position: absolute;
//         animation: sparkle 0.6s linear forwards;
//         font-size: 24px; // Adjust size as needed
//     }
// `;
//
// type Sparkle = {
//     id: number;
//     angle: number;
//     distance: number;
// };
// const SparkleSwitch = () => {
//     const [sparkles, setSparkles] = useState<Sparkle[]>([]);
//
//     const theme = useTheme();
//
//     const handleToggle = () => {
//         // Create multiple sparkles at random positions
//         const newSparkles = Array.from({ length: 5 }).map((_, index) => ({
//             id: Math.random(), // Unique key for React elements
//             angle: (index / 10) * 2 * Math.PI, // Distribute sparkles evenly in an oval
//             distance: 20, // Base distance from the center of the switch
//         }));
//         setSparkles(newSparkles);
//
//         // Clear sparkles after animation ends
//         setTimeout(() => setSparkles([]), 600); // Match the timeout to the animation duration
//     };
//
//     return (
//         <SparkleBox>
//             <Switch
//                 onChange={handleToggle}
//                 sx={{
//                     ".chakra-switch__track": {
//                         background: theme.colors.fg.default,
//                     },
//                     ".chakra-switch__thumb": {
//                         _checked: {
//                             bg: theme.colors.brand["200"],
//                         },
//                     },
//                 }}
//                 size="lg"
//             />
//             {sparkles.map((sparkle) => (
//                 <Sparkle key={sparkle.id} {...sparkle} />
//             ))}
//         </SparkleBox>
//     );
// };

// const MotionSwitch = motion(Switch);
const MotionDiv = motion.div;

const ShakingSwitch = () => {
    const theme = useTheme();
    const [isChecked, setIsChecked] = useState(false);
    // const controls = useAnimation();
    //
    // useEffect(() => {
    //     if (isChecked) {
    //         controls.start({
    //             x: [0, -10, 10, -10, 10, 0], // Keyframes for shaking
    //             transition: { type: "spring", stiffness: 200, damping: 5 },
    //         });
    //     }
    // }, [isChecked]);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <MotionDiv
            animate={
                isChecked
                    ? {
                          x: [0, -2, 2, -2, 2, 0], // Keyframes for shaking
                          transition: { duration: 0.4 }, // Define the duration of the animation
                      }
                    : {}
            }
        >
            <Switch
                isChecked={isChecked}
                onChange={handleToggle}
                // animate={controls} // Attach the animation controls to the component
                sx={{
                    ".chakra-switch__track": {
                        background: theme.colors.fg.default,
                    },
                    ".chakra-switch__thumb": {
                        _checked: {
                            bg: theme.colors.brand["200"],
                        },
                    },
                }}
                size="lg"
            />
        </MotionDiv>
    );
};
export const LandingPageHero = (props: Queries.HeroComponentFragment) => {
    console.log("Props from landing page hero: ", props);
    const theme = useTheme();
    const imageLocation = props.imageLocation;
    const [animationEnded, setAnimationEnded] = useState(false);
    const maxWidth = useBreakpointValue({ base: "100%", md: "600px" });
    return (
        <Stack
            className={"hero"}
            maxW={"8xl"}
            // minH={"100vh"}
            direction={{
                base: "column",
                md: getFlexDirection(props.imageLocation as HeroImageLocation),
            }}
            px={6}
            {...(props.anchor != null ? { id: props.anchor } : {})}
        >
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={8} w={"full"} maxW={"xl"}>
                    <HStack>
                        <ShakingSwitch />
                        {/* <SparkleSwitch /> */}
                        {/* <Switch */}
                        {/*     // isChecked={false} */}
                        {/*     sx={{ */}
                        {/*         ".chakra-switch__track": { */}
                        {/*             background: theme.colors.fg.default, */}
                        {/*         }, */}
                        {/*         ".chakra-switch__thumb": { */}
                        {/*             _checked: { */}
                        {/*                 bg: theme.colors.brand["200"], */}
                        {/*             }, */}
                        {/*         }, */}
                        {/*     }} */}
                        {/*     size="lg" */}
                        {/* /> */}
                        <Text fontSize={14} lineHeight={"14px"}>
                            <b>Turn on</b> your Dental practice&apos;s full
                            potential with Practice Porter&apos;s new patient
                            booking solution.
                        </Text>
                    </HStack>
                    <Heading
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        textAlign={
                            imageLocation === HeroImageLocation.TOP
                                ? "center"
                                : "initial"
                        }
                    >
                        Grow your dental practice{" "}
                        <span
                            style={{
                                fontFamily:
                                    "Alice, Times New Roman, Times, serif",
                                fontWeight: 500,
                            }}
                        >
                            with more new patients.
                        </span>
                    </Heading>
                    <RichText {...(props.content as unknown as any)} />
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Box
                    position={"relative"}
                    p={4}
                    pl={8}
                    overflow="visible"
                    height={"max-content"}
                >
                    <Asset
                        props={props.image as Queries.AssetComponentFragment}
                        contentProps={{
                            objectFit: "cover",
                            maxWidth,
                            width: "auto",
                        }}
                    />
                    {/* Top left overlay */}
                    <TranslucentBox props={{ top: "15%", left: "-2%" }}>
                        <StyledStack height={"120px"} width={"120px"}>
                            <Box
                                position={"absolute"}
                                style={{ top: "8px" }}
                                zIndex={1400}
                            >
                                <Badge
                                    borderRadius={"lg"}
                                    backgroundColor={"fg.default"}
                                    color={"gray.50"}
                                    fontWeight={600}
                                >
                                    + $10k
                                </Badge>
                            </Box>
                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                                style={{ marginTop: "10px" }}
                            >
                                <PieChart width={100} height={100}>
                                    <Pie
                                        activeIndex={0} // Index of the segment you want to stick out
                                        activeShape={(props: any) => (
                                            <ActiveSegment
                                                {...props}
                                                animationEnded={animationEnded}
                                            />
                                        )}
                                        outerRadius={45}
                                        dataKey={"value"}
                                        data={[
                                            {
                                                name: "Group A",
                                                value: 32,
                                            },
                                            {
                                                name: "Group B",
                                                value: 68,
                                            },
                                        ]}
                                        onAnimationEnd={() =>
                                            setAnimationEnded(true)
                                        }
                                        cx="50%"
                                        cy="50%"
                                        blendStroke={true}
                                        strokeOpacity={1}
                                    >
                                        <Cell
                                            style={{ outline: "none" }}
                                            offset={100}
                                            key={"cell-0"}
                                            fill={theme.colors.brand["400"]}
                                        />
                                        <Cell
                                            style={{ outline: "none" }}
                                            key={"cell-1"}
                                            fill={theme.colors.brand["900"]}
                                        />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </StyledStack>
                    </TranslucentBox>
                    {/* Bottom right overlay */}
                    <TranslucentBox props={{ bottom: "7%", right: "-3%" }}>
                        <StyledStack
                            width={"180px"}
                            height={"130px"}
                            direction={"row"}
                            justify={"space-between"}
                        >
                            <Stack justifyContent={"space-between"}>
                                <Stack gap={0}>
                                    <Text fontWeight={500} fontSize={32}>
                                        +56
                                    </Text>
                                    <Text fontSize={12} lineHeight={"2px"}>
                                        new patients
                                    </Text>
                                </Stack>
                                <Flex>
                                    <Badge
                                        borderRadius={"lg"}
                                        backgroundColor={"fg.default"}
                                        color={"gray.50"}
                                        fontWeight={600}
                                    >
                                        +120%
                                    </Badge>
                                </Flex>
                            </Stack>
                            <ResponsiveContainer width="50%" height="100%">
                                <BarChart
                                    width={150}
                                    height={40}
                                    data={[
                                        {
                                            name: "Group A",
                                            value: 60,
                                        },
                                        {
                                            name: "Group B",
                                            value: 50,
                                        },
                                        {
                                            name: "Group C",
                                            value: 90,
                                        },
                                    ]}
                                >
                                    <Bar dataKey="value">
                                        <Cell
                                            key={"cell-0"}
                                            fill={theme.colors.brand["500"]}
                                        />
                                        <Cell
                                            key={"cell-1"}
                                            fill={theme.colors.brand["400"]}
                                        />
                                        <Cell
                                            key={"cell-2"}
                                            fill={theme.colors.brand["900"]}
                                        />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </StyledStack>
                    </TranslucentBox>
                </Box>
            </Flex>
        </Stack>
    );
};
