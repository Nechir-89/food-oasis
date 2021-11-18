import React, { useState, useCallback, useEffect, useRef } from "react";
import useOrganizationBests from "hooks/useOrganizationBests";
import useCategoryIds from "hooks/useCategoryIds";
import useSelectedStakeholder from "hooks/useSelectedStakeholder";
import useBreakpoints from "hooks/useBreakpoints";
import { getMapBounds } from "helpers";
import { defaultViewport } from "helpers/Configuration";
import { Mobile, Tablet, Desktop } from "./layouts";
import Filters from "./Filters";
import Map from "./Map";
import List from "./List";
import Preview from "./Preview";
import Details from "./Details";
import * as analytics from "services/analytics";

const ResultsContainer = ({
  origin,
  setOrigin,
  userCoordinates,
  taglineText,
}) => {
  const mapRef = useRef(null);
  const { isDesktop, isTablet } = useBreakpoints();
  const { data: stakeholders, search, loading } = useOrganizationBests();
  const { categoryIds, toggleCategory } = useCategoryIds([]);
  const { selectedStakeholder, doSelectStakeholder } = useSelectedStakeholder();
  const [isVerifiedSelected, selectVerified] = useState(false);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    const { zoom, dimensions } = mapRef.current.getViewport();

    const criteria = {
      latitude: origin.latitude,
      longitude: origin.longitude,
      bounds: getMapBounds(origin, zoom, dimensions),
      categoryIds,
      isInactive: "either",
      verificationStatusId: 0,
    };
    search(criteria);
    analytics.postEvent("searchArea", criteria);
  }, [origin, categoryIds, search]);

  const searchMapArea = useCallback(() => {
    const { center } = mapRef.current.getViewport();
    setOrigin(center);
  }, [setOrigin]);

  const resetOrigin = useCallback(() => {
    setOrigin(userCoordinates || defaultViewport.center);
  }, [setOrigin, userCoordinates]);

  const toggleShowList = useCallback(() => {
    doSelectStakeholder(null);
    setShowList((showList) => !showList);
  }, [doSelectStakeholder]);

  const filters = (
    <Filters
      origin={origin}
      setOrigin={setOrigin}
      toggleCategory={toggleCategory}
      categoryIds={categoryIds}
      isVerifiedSelected={isVerifiedSelected}
      selectVerified={selectVerified}
      userCoordinates={userCoordinates}
      showList={showList}
      toggleShowList={toggleShowList}
      taglineText={taglineText}
    />
  );

  const map = (
    <Map
      ref={mapRef}
      center={origin}
      stakeholders={stakeholders}
      doSelectStakeholder={doSelectStakeholder}
      selectedStakeholder={selectedStakeholder}
      categoryIds={categoryIds}
      loading={loading}
      searchMapArea={searchMapArea}
    />
  );

  const list = (
    <List
      selectedStakeholder={selectedStakeholder}
      doSelectStakeholder={doSelectStakeholder}
      stakeholders={stakeholders || []}
      loading={loading}
      handleReset={resetOrigin}
    />
  );

  if (isDesktop) return <Desktop filters={filters} map={map} list={list} />;

  if (isTablet) return <Tablet filters={filters} map={map} list={list} />;

  return (
    <Mobile
      filters={filters}
      map={map}
      list={showList && list}
      preview={
        selectedStakeholder && (
          <Preview
            doSelectStakeholder={doSelectStakeholder}
            stakeholder={selectedStakeholder}
          />
        )
      }
      details={
        selectedStakeholder && (
          <Details
            selectedStakeholder={selectedStakeholder}
            onClose={doSelectStakeholder.bind(null, null)}
          />
        )
      }
    />
  );
};

export default ResultsContainer;
